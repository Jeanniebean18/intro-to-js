
var counter = parseInt(prompt("give me a number:"));
var stop_counter = parseInt(prompt("give me a count to:"));



while (counter <= stop_counter) {
  
    if (counter % 3 == 0 && counter % 5 == 0)
    {
    alert("buzzfizz!")
    }
    else if (counter % 3 == 0)
    {
    alert("fizz!");
    }
    else if (counter % 5 == 0)
    {
      alert("buzz!")
    }
    else 
    {
      alert(counter);
    }
  counter++;
}



