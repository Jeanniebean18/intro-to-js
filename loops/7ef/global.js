
var counter = parseInt(prompt("give me a number:"));
var stop_counter = parseInt(prompt("give me a count to:"));



for (i = counter; i <= stop_counter; i++)  {
  
    if (i % 3 == 0 && i % 5 == 0)
    {
    alert("buzzfizz!")
    }
    else if (i % 3 == 0)
    {
    alert("fizz!");
    }
    else if (i % 5 == 0)
    {
      alert("buzz!")
    }
    else 
    {
      alert(i);
    }
  
}



