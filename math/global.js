
var number_one = prompt("Please enter a number:");
var number_two = prompt("Please enter another number:");
var number_three = prompt("Please enter a third number:");

var sum = (Number(number_one) + Number(number_two) + Number(number_three));
alert(number_one + "+" + number_two + "+" + number_three + "=" + sum);

var difference = (Number(number_one) - Number(number_two) - Number(number_three));
alert(number_one + "-" + number_two + "-" + number_three + "=" + difference);

var multiply = (Number(number_one) * Number(number_two) * Number(number_three));
alert(number_one + "*" + number_two + "*" + number_three + "=" + multiply);

// got this to work, not sure it makes sense. Not like Ruby :)
// when incrementing the number, it doesn't save the new value into the variable, instead it increments
// it's original variable.

var increment = (number_one++); // this value returns the original number
alert(increment + "++" + "=" + number_one); // number one is now incremented.

var decrement = (number_one--); // this value returns the original number
alert(decrement + "--" + "=" + number_one); // number one is now decremented.