
function specialAddition(numberOne,numberTwo){
    if (numberOne>numberTwo){
        return numberOne-numberTwo
    }
    else{
        return numberTwo-numberOne
    }
}
function simpleDivision(numberOne,numberTwo){
    var div=numberOne/numberTwo
    return div

}
function specialCalculator(numberOne,numberTwo){ //y is higher order function
    console.log('Result of Special Addition is',specialAddition(numberOne,numberTwo)); 
    console.log("Result of Simple Division is",simpleDivision(numberOne,numberTwo));
}
specialCalculator(100,20)
specialCalculator(20,10)
specialCalculator(200,50)