
var password = "peanutbutter";

var user_input = (prompt("Please enter a password")).toLowerCase();


while (password != user_input)
{ counter = 1
  alert("wrong password, try again.");
  var user_input = prompt("Please enter a password");
  counter++;
}

 alert("You got it! and it took you " + counter + " tries");
