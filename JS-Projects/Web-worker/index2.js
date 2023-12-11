const worker = new Worker('worker.js');
const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

sumButton.addEventListener('click',()=>{
    worker.postMessage('hello')
});

worker.onmessage=function(message){
    alert(`The final message is ${message.data}`);
}

bgButton.addEventListener("click",()=>{
    if(document.body.style.background!=='yellow')
        document.body.style.background='yellow';
    else
        document.body.style.background='red';
});