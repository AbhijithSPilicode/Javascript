//DOM(Document Object Model):An API for HTML and XML formats.
//It allows us to change the document structure, style, or content from JavaScript
//DOM connects web pages to scripts or programming languages.
//D=Document=Web page,o=head section,body section.unordered list,M=Model
//Accessing elementid by 4 methods:
//getElementById() - returns a single Element Node.
//getElementsByClassName() - returns elements that have a specific class name.
//querySelectorAll() - returns a NodeList of Element Nodes.
//querySelector() - returns a single Element Node.

//Adding elements to body
const body=document.body
// body.append("Hello world","Bye")
// //making an element
// const div2=document.createElement('div')
// div2.innerText="Hello world div2" //to create text
// div2.textContent="Hello world2 div2 "//another method to create text
// body.append(div2) //adding div to body
// const div3=document.querySelector('div3')
// console.log(div3.textContent)
// console.log(div3.innerText) //innertext just prints out the text that's visible on our page 
// const strong=document.createElement('strong')
// strong.innerText="Hello world 3"
// div.append(strong)
const div=document.querySelector("div")    //returns a single Element Node called div
const spanHi=document.querySelector("#hi")   //returns a single Element Node called id=hi
const spanBye=document.querySelector("#bye")   //returns a single Element Node called id=bye
// spanBye.remove()
// div.append(spanBye)
// spanHi.remove()
console.log(spanHi.getAttribute('id'))
console.log(spanHi.title)
console.log(spanHi.setAttribute("title","sdfsdjfsd"))
spanHi.removeAttribute("title")
console.log(spanHi.dataset)
spanHi.style.backgroundColor="red"  //giving background color