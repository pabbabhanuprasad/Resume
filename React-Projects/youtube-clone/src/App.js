import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => (
<BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
        Navbar
        <Routes>
            <Rout path="/" exact  element={<Feed />}/>
        </Routes>
    </Box>
</BrowserRouter>
)

export default App;
