// const express = require("express");
// const bcrypt = require('bcrypt');
// const fs = require("fs");

// const app = express();
// const port = 3002;

// app.use(express.json());

// app.post("/users", (req, res) => {
//     const { username, password, DOB } = req.body;

//     bcrypt.hash(password, 10, (err, hash) => {
//         if (err) {
//             return res.status(500).send("Error hashing password");
//         }
//         fs.readFile("./index.json", (readErr, data) => {
//             if (readErr) {
//                 return res.status(500).send("Error reading file");
//             }

//             let register = JSON.parse(data);

//             const dataa = register.find((item) => item.username === username);

//             if (dataa) {
//                 res.send("Data sending error");
//             } else {
//                 register.push({ username, password: hash, DOB });

//                 fs.writeFile("./index.json", JSON.stringify(register, null, 2), (writeErr) => {
//                     if (writeErr) {
//                         return res.status(500).send("Error writing file");
//                     }

//                     res.status(200).send("User registered successfully");
//                 });
//             }
//         });
//     });
// });

// app.listen(port, () => {
//     console.log(`hi ${port} is listening`);
// });





const express = require("express");
const bcrypt = require('bcrypt');
const fs = require("fs");
const jwt = require('jsonwebtoken');

const app = express();
const port = 3009;

app.use(express.json());

const secretKey = 'password';

app.post("/users", (req, res) => {
    const { username, password, DOB } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).send("Error hashing password");
        }

        fs.readFile("./index.json", (readErr, data) => {
            if (readErr) {
                return res.status(500).send("Error reading file");
            }

            let register = JSON.parse(data);

            const dataa = register.find((item) => item.username === username);
            console.log(data);
            if (dataa) {
                const token = jwt.sign({ username, DOB }, secretKey, { expiresIn: '1h' });
                register.push({username,password:hash,DOB,token});
                fs.writeFile("./index.json", JSON.stringify(register, null, 2), (writeErr) => {
                    if (writeErr) {
                        return res.status(500).send("Error writing file");
                    }
                   
                  

                    res.status(200).json(register);
                });
            } else {
                res.send("Data sending error");
                
            }
        });
    });
});

app.listen(port, () => {
    console.log(`hi ${port} is listening`);
});

