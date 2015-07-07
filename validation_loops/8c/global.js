

var user_input = parseInt(prompt("Please enter a number between 1 & 8"));
counter = 0
sum=0

while (user_input >=1 && user_input <= 8 )
{ sum+=user_input;
  var user_input = parseInt(prompt("great! give me another"));
  counter++;
}


alert("The average of your numbers is " + sum/counter);
 