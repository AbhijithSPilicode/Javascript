const grandparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")
//AddEventListener():to do multiple events at a time
//Eventbubbling:process of going from closest element to furthest away element or process of ging from grandparent to child
grandparent.addEventListener('click',e=>{
    console.log('Grandparent 1')
})

parent.addEventListener('click',e=>{
    console.log('Parent 1')
})

child.addEventListener('click',e=>{
    console.log('Child 1')
})

document.addEventListener('click',e=>{
    console.log('document 1')
})