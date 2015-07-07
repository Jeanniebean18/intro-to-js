
var password = "peanutbutter";

var user_input = prompt("Please enter a password");


while (password != user_input)
{
  alert("wrong password, try again.");
  var user_input = prompt("Please enter a password");
}

 alert("You got it!");
