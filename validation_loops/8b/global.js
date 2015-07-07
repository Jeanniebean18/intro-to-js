var secretNumber = 18;

var user_input = prompt("Please enter the secret number (between 1 & 100)");
counter = 1

while (secretNumber != user_input)
{ 
  alert("wrong secret number, try again.");
  var user_input = prompt("Please enter the secret number");
  counter++;
}

 alert("You got it! and it took you " + counter + " tries");