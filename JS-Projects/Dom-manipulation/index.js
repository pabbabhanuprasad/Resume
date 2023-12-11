//using js display the content in the browser
// const body = document.body
// body.append("Hello world","hai");

//append() is used to display the content in the browser
//appendChild() if want use it, it should having a child

//making an element
const body=document.body
const div=document.createElement("div");
//div.innerText="<strong>hello world</strong>"; //output:<strong>hello world</strong>
// div.textContent="hello world2";

//div.innerHTML="<strong>hello world</strong>"; //output:hello world

const strong=document.createElement("strong");
strong.innerText="Hello World 3";
div.append(strong);
body.append(div);