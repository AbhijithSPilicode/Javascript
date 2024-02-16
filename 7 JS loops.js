//loops:to make repeatative items into 1
//types:for,while,do..while,for..in,for..of
//for loop
for(let i=0;i<5;i++) {
    //initial expression,condition,increment
    console.log(i,'Hello world');
}
//while loop
var n=0;
while(n<5){
    n++;
    if(n==3) continue; //not run any code after that command and go no next iteration
    console.log("n= "+n);
}

var n=0;
while(n<5){
    n++;
    if(n==3) break; //completely jump the loop
    console.log("b= "+n);
}
//do..while
var i=0;
do{
    i++;
    console.log("i="+i);
}while(i<5);
