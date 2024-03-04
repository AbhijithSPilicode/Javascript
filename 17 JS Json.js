myJSON = {
    "name":{
    "firstname":"Abhijith",
    "lastname":"santhosh"
    },
    "age":23,
    "skills":  ["Machinelearning","Data science"],
    "married":true,
    "superpowers":null
}
//stringify method:used to convert json to a string
var stringified=JSON.stringify(myJSON);
console.log(stringified);
//parse method
var stringJSON='{"name":"abhi","age":23,"state":"kerala"}';
var myParse=JSON.parse(stringJSON);
console.log(myParse);
