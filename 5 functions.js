//function is set of statements for doing a task

function square(number){
    return number*number;
}
a=square(4)
console.log(a);
//scope of function:visibility of variables :global scope and local scope
var someVar="Hot";
function myFun(){
    var someVar="Cold";
    console.log(someVar)
}
console.log(someVar);
b=myFun();
//ested function
function addSquares(a,b){
    function square(x){
        return x*x;
    }
    return square(a)+square(b);
}
d=addSquares(2,3);
console.log(d)
//hoisting:declaring function anywhere in the code is equivalent to declaring on top
//Arrow functions
var multiply=(x,y) =>{return x*y};
e=multiply(3,4)
console.log(e)
//or
var multiply=(x,y) => (x*y);
f=multiply(3,4)
console.log(f)
//similar to
var multiply=function(x,y){
    return x*y;
}
