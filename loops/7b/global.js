
var counter = parseInt(prompt("give me a number:"));
var stop_counter = parseInt(prompt("give me a count to:"));
var increment = parseInt(prompt("what should i count by?"));

// part a
// while (counter <= stop_counter) {
//   alert(counter);
//   counter++;
// }
//
//
// if (counter > stop_counter)
// {
//   while (counter >= stop_counter) {
//     alert(counter);
//     counter--;
//   }
// }

// extended
if (counter > stop_counter)
{
  while (counter >= stop_counter) 
  {
    alert(counter);
    counter-=increment;
  }
}

else
  
{
  while (counter <= stop_counter) 
  {
  alert(counter);
  (counter+=increment);
  }
}





// Prompt the user for a start value and an end value. Count from the start value to the end value using a while loop. Make sure to account for the start-value being equal to or greater than the end-value (should it not count? Should it count down instead of up in such cases?).
//
// Extend this by asking the user what increment they want to count by.