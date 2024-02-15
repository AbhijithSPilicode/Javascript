//string is a series of zero or more characters enclosed inside a single or double quotes 
var Name="Abhi"; 
//quote characters can use in string by adding backslash at the end of string
var quote="My name is \"abhi\" ";
var quote1="My name is 'Jith'  ";
console.log(Name,quote,quote1);
//concatenation of strings using +
console.log(Name+quote);
console.log(Name+=quote1);
//String Methods:
//CharAt():for returning character at that specified position
var stringOne="I Am currently working in Kalvium"
var stringTwo="I Like transfering knowledge to others"
console.log(stringOne.charAt(2))
//charCodeAt():Returns unicode of the character at that index
console.log(stringOne.charCodeAt(2))
//concat:two join two strings
console.log(stringOne.concat(stringTwo))
//endsWith() //to know a string ends with a specific character
console.log(stringOne.endsWith("Kalvium"))
//fromCharCode() //to convert unicode values to characters
console.log(String.fromCharCode(97))
//includes() //to check does a string have a word
console.log(stringOne.includes("am"))
console.log(stringOne.includes("Am"))
//indexOf() //returns position of first found occurance of specified value
console.log(stringOne.indexOf("i"))
console.log(stringOne.indexOf("Kalvium"))
//lastIndexOf() returns position of last found occurance of specified value
console.log(stringOne.lastIndexOf("i"))
console.log(stringOne.lastIndexOf("Kalvium"))
//match() check match against a regular expression
console.log(stringOne.match(/Kalvium/g))
//repeat() returns a copy of existing string
console.log(stringOne.repeat(3))
//replace() returns a new string at the specified values
console.log(stringOne.replace(/I/g,"we"))
//search()
console.log(stringTwo.search("others"))
//slice() to extract a particular part of string
console.log(stringTwo.slice(32,38))
//split() it splits string into array of substrings
console.log(stringOne.split(" "))
//startsWith() //to check weather a string start with a particular string
console.log(stringOne.startsWith("Kalvium"))
//substring() kind of slicing,string inside string
console.log(stringOne.substring(0,4))
//toLowerCase()
console.log(stringOne.toLowerCase())
//toUpperCase
console.log(stringOne.toUpperCase())
//trim to remove the white space
var stringThree="            Hi,i don't want space        "
console.log(stringThree.trim())


