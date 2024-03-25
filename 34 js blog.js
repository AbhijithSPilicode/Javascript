button.addEventListener("click",function(){helperAddPost()});
function helperAddPost(){
    document.getElementById("popupContact").style.display="block";
}
postMessage.addEventListener("click",function(){helperPost()});
function helperPost(){
    document.getElementById("popupContact").style.display="none";
    addTitle()
}







class Blog{
    constuctor(title,detail){
        this.title=title;
        this.detail=detail;
    }
 addTitle(){
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;

 }
    }



    