
var password = "peanutbutter";

var user_input = (prompt("Please enter a password")).toLowerCase();
counter = 1


while (password != user_input)
{ 
  alert("wrong password, try again.");
  var user_input = prompt("Please enter a password");
  counter++;
}

 alert("You got it! and it took you " + counter + " tries");
