
var user_age = parseInt(prompt("how old are you?"));

if (user_age >= 25) 
{
  alert("You can rent a car");
}

else if (user_age <= 24 && user_age >= 21)
{
  alert("Please don't drink and drive");
}

else if (user_age <= 20 && user_age >= 16)
{
  alert("You're eligible for a driver's license");
}

else if (user_age <= 15 && user_age >= 0)
{
  alert("You can't drive yet, but you'll be able to in a few years");
}

else if (user_age < 0)
{
  alert("You haven't been born yet");
}

else if (isNaN(user_age))
{
  alert("Sorry, but that's not a number");
}

else
{
  alert("that's impossible");
}

// /Age 25 and older: "You can rent a car"
// Age 21 - 24: "Please don't drink and drive"
// Age 16 - 20: "You're eligible for a driver's license"
// Age 0 - 15: "You can't drive yet, but you'll be able to in a few years"
// Any negative number: "You haven't been born yet"
// NaN: "Sorry, but that's not a number"