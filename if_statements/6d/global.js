
var user_age = parseInt(prompt("how old are you?"));



if (user_age >= 25) 
{
  alert("You can rent a car");
}

if (user_age >= 21)
{
  alert("Please don't drink and drive");
}

if (user_age >= 16)
{
  alert("You're eligible for a driver's license");
}

if (user_age <= 15 && user_age >= 0)
{
  alert("You can't drive yet, but you'll be able to in a few years");
}

if (user_age < 0)
{
  alert("You haven't been born yet");
}

if (isNaN(user_age))
{
  alert("Sorry, but that's not a number");
}


// Age 25 and older: "You can rent a car"
// Age 21 and older: "Please don't drink and drive"
// Age 16 and older: "You're eligible for a driver's license"
// Age 0 - 15: "You can't drive yet, but you'll be able to in a few years"
// Any negative number: "You haven't been born yet"
// NaN: "Sorry, but that's not a number"