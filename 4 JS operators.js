//operators are symbols.variables are called operands.
//Eg:Arithmetic operators,comparison operators,logical operators,assignment operators,conditional operators,string operators,type operators,bitwise operators
var a=35;
var b=10;
//Arithmetic operator:+-/*% , 
console.log(a+b)
console.log(a%b)
//comparison operators:==,>=,>,<,!=,===(equal value and equal type)
console.log(a>=b)
console.log(a===b)
//logical operators: &&,||,!
var c=0;
var d=1;
console.log(c&&d)
console.log(c||d)
console.log(!d)
//assignment operator =,+=,-=
var e=10;
console.log(e)
//conditional operator syntax: 
var age=19
var voteable=(age<18)?"Too young":"Old enough";
console.log(voteable)
//string operator + for concatenation
var firstName="abhi"
var secondName="Jith"
console.log(firstName+secondName)
console.log(age+e+firstName+secondName)
//type operator
console.log(typeof(firstName))
console.log(typeof(age))
//bitwise operator
console.log(5&1)
console.log(0101&0001)
