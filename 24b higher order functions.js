const foods=['pizza','burger','fingerChips','donuts','sprongRoll']
//1.slice()
modifiedFood=foods.slice(1,4)
console.log(modifiedFood)
//2.splice()
function spliced(foods){
foods.splice(2,0,'noodles','icecream')
return foods
}
console.log(spliced(foods))
//3.map
let numbers1 = [11, 34,20, 5,53,16];
let square = numbers1.map(function(number) {
  return number * 2;
});
console.log(square)
//4.Lambda
function isEvenUsingLambda(num){
    num.filter(num=>{
        if (num%2===0){
            console.log(num);
        }
    })
}
arrayy=[1,2,3,4,5,6]
console.log(isEvenUsingLambda(arrayy))
//4.filter
function isEven(number){
        return number % 2 === 0;
}
function isprimenumber(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if (num%i===0){
            return false;
        }
    }
    return true;
}
let arr=[12,324,213,4,2,3,45,4234]
function checkNumber(arr,operation){
    const result=[]
    arr.forEach(number=>{
        switch(operation){
            case 'even':
                result.push(isEven(number))
            case 'prime':
                result.push(isPrime(number))
                break
            default:
                result.push(null);    
        }
    })
    }
console.log(checkNumber(arr,'even'))

