

console.log( "5 == '5' is " + (5 == '5') ); //true
console.log( "5 == 'five' is " + (5 == 'five') );// false
console.log( "5 == '6' is " + (5 == '6') );//false
console.log( "5 === '5' is " + (5 === '5') );//false
console.log( "5 == 2 + 3 is " + (5 == 2 + 3) );//true
console.log( "5 == 5 is " + (5 == 5) );//true
console.log( "5 === 5 is " + (5 === 5) );//true
console.log( "true == 'true' is " + (true == 'true') );//false - I thought this would be true since 5 == '5'
console.log( "true === 'true' is " + (true === 'true') );//false
console.log( "true == false is " + (true == false) );//false
console.log( "5 == 12 is " + (5 == 12) );//false
console.log( "5 !== 12 is " + (5 != 12) );//true
console.log( "5 < 12 is " + (5 < 12) );//true
console.log( "5 <= 12 is " + (5 <= 12) );//true
console.log( "5 > 12 is " + (5 > 12));//false
console.log( "5 >= 12 is " + (5 >= 12));//false

var password = "peanutbutter";

user_input = prompt("Please enter a password");

if (password == user_input)
{
  alert("Good job!");
}

else
{
  alert("Sorry, that's not the right password.");
}