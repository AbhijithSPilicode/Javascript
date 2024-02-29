//Array iteration:8 methods:forEach,map,filter,reduce,some,every,find,findindex
//forEach:going through array and doing something inside array
[1,2,3].forEach(function(item,index){
    console.log(item,index);
});
//map : to change list values.takes array and put some new value
const three=[1,2,3];
const doubled=three.map(function(item){
    return item*2;      //it will double each item in array
});
console.log(doubled);
//filter:take an array and check each item of array with some condition
const ints=[1,2,3];
const evens=three.map(function(item){
    return item%2==0;      //it will double each item in array
});
console.log(evens);
//reduce:we are going to do something and then pass the result to next iteration along with next item of array
const sum=[1,2,3].reduce(function(result,item){
    return result+item;      //it will double each item in array
},0); //0 is initial result
console.log(sum);
//some:does any item in this array meet this condition
const hasNegativeNumbers=[1,2,3,-1,4].some(function(item){
    return item<0;
});
console.log(hasNegativeNumbers);
//every:all item in array meet a condition
const hasPositiveNumbers=[1,2,3].every(function(item){
    return item>0;
});
console.log(hasPositiveNumbers);
//find:goes every element of array and search for specific item and return that item
const objects=[{id:'a'},{id:'b'},{id:'c'}];
const found=objects.find(function(item){
    return item.id==='b';
})
console.log(found);
//findindex:goes every element of array and search for specific item and return that index of item
const objects2=[{id:'a'},{id:'b'},{id:'c'}];
const foundIndex=objects2.findIndex(function(item){
    return item.id==='b';
})
console.log(foundIndex);