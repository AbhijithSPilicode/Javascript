//Usecases of objects:
//using objects for lookup values in data
var alpha={
    1:'Z',
    2:'Y',
    3:'X',
    4:'W'
};
console.log(alpha[2])
//removing object properties
let dishes={
    plates:8,
    cups:10,
    forks:28,
    bowls:13
};
delete dishes.cups;
console.log(dishes);
//testing objects for properties
console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));
//Accessing and modifying nested objects
var ourStorage={
    "desk":{
        "drawer":"stapler"
    },
    "cabinet":{
        "top drawer":{
            "folder1":"a file",
            "folder2":"secrets"
        },
        "bottom drawer":"soda"
    }
};
console.log(ourStorage.cabinet["top drawer"].folder2)
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2="cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);
//Generate an Array of All object Keys
console.log(Object.keys(ourStorage));
//finding keys of an object
const book={
    name:"Jungle Book",
    author:"J.K.Rowling",
};
console.log(Object.keys(book));
//deleting an object
let myObject={key1:'value1',key2:'value2'};
delete myObject.key1;
console.log(myObject)