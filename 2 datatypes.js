//7 types:boolean,null,undefined,number,string,symbol,object
//boolean
var data=true; //try with false
if(data){
    console.log("Boolean True!");    
} else{
    console.log("Boolean false");
}

//null =>no value
var n=null;
console.log(n*32);

//undefined =>not declared or value is not assigned to the declared variable
var a;
console.log(a);

//number
var age=21;
console.log(age);

//string
var name="Sachin"
console.log("My name is ",name)

//symbol =>unique and immutable
var sym1=Symbol("dollar");
var sym2=Symbol("dollar");
console.log(sym1===sym2);
console.log(String(sym1)===String(sym2));

//object =>collection of properties
var myCar=new Object();
myCar.make="Ford";
myCar.model="Mustang";
console.log(myCar.make);
console.log(myCar.model);
