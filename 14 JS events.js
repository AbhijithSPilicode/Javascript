function changeColor(obj){
    obj.style.color="Peru";
}

document.getElementById("button1").onclick=changeBackgroundcolorToMediumOrchid;
function changeBackgroundcolorToMediumOrchid(){
    document.querySelector('body').style.background="MediumOrchid";
}

function removeLetterFromH1(){
    var h1=document.querySelector('h1')
    h1.textContent=h1.textContent.slice(0,-1);
}


function mOver(obj){
    obj.innerHTML="Thank you!"
}

function mOut(obj){
    obj.innerHTML="Please put mouse pointer on top of me"
}
/*Event Listeners:for doing multiple events at a same time*/
var myP=document.getElementById("myP");
var myDiv=document.getElementById("myDiv");
var myP2=document.getElementById("myP2");
var myDiv2=document.getElementById("myDiv2");
myP.addEventListener("click",function(){myDiv.style.background="lightblue"});
myP.addEventListener("click",changeText,true);
myP2.addEventListener("click",changeText2,true);
myDiv.addEventListener("mouseover",function(){myDiv.style.background="lightgoldenrodyellow"});
function changeText(){
    myP.textContent="i have completed my b.tech from amrita university and m.tech from christ university."   
}
function changeText2(){
    myP.textContent=myP.textContent+="Now I am working in Kalvium"   
}

myP2.addEventListener("mouseover",changeText,true);
myP2.removeEventListener("mouseover",changeText,true);
