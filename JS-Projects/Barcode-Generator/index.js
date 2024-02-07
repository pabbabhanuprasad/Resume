let userInput=document.querySelector('.container .userInput');
let generateBtn=document.querySelector('.container .generate-box');
let barcode=document.querySelector('.container .barcode-box #barcode');
let container=document.querySelector('.conatiner');

let generateBarcode=()=>{
    container.classList.add('active');
    setTimeout(()=>{
        jsBarcode('#barcode',userInput.value,{
            background:"white",
            lineColor:"black",
        });
    },2000)
}

generateBtn.addEventListener('click',()=>{
    if(userInput.value!=''){
        generateBarcode();
    }
})