//Async & Await is a more modern approach to handle promises.
let cookies=['a','b','c','d','e']
function getcookies(cookies){

    setTimeout(function(){ //settimeout is an asynchronous form
        for(i=0;i<cookies.length;i++){
            console.log(cookies[i])
        }
    },1000) 
}
function insertcookie(cookies,newcookies){
        
     setTimeout(function(){ //settimeout is an asynchronous form
        cookies.push(newcookies)
        getcookies(cookies)
    },2000) 
}

console.log(insertcookie(cookies,'f'))
