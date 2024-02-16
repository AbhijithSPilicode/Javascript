//if (condition) {
  /* code to run if condition is true */
//} else {
    /* run some other code instead */
//  }
let shoppingDone = true;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance)
//nested condition
var choice="sunny";
var temperature=85;
if (choice === "sunny") {
    if (temperature < 86) {
      textContent = 'fine weather';
    } else if (temperature >= 86) {
      textContent = 'weather is not fine';
    }
  }
console.log(textContent)
//logical operators
var iceCreamVanOutside="No"
houseStatus="on fire"
if (iceCreamVanOutside || houseStatus === "on fire") {
    console.log("You should leave the house quickly.");
  } else {
    console.log("Probably should just stay in then.");
  }
  //switch statements
  var expression=2;
  switch (expression) {
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")
        break;
    default:
        console.log("0")
      break;
  }
  //ternary operation
  //condition ? run this code : run this code instead
  var isBirthday=isBirthday
  const greeting = isBirthday? "Happy birthday Mrs. Smith — we hope you have a great day!": "Good morning Mrs. Smith.";
  console.log(greeting)

  
