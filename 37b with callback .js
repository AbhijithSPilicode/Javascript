//Async & Await is a more modern approach to handle promises.
let cookies=['a','b','c','d','e']
function getcookies(cookies,callback){

    setTimeout(function(){ //settimeout is an asynchronous form
        for(i=0;i<cookies.length;i++){
            console.log(cookies[i])
        }
        callback();
    },1000) 
}
function insertcookie(cookies,newcookies,callback){
        
     setTimeout(function(){ //settimeout is an asynchronous form
        cookies.push(newcookies)
        callback(cookies)
    },2000) 
}
insertcookie(cookies,'f',function(cookies){
    getcookies(cookies,function(){
    })
})
