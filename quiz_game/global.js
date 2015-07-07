


var questions = [
"What was the main character's name in the movie 'Clueless' ? a) Paula b) Barbie c) Cher ",
"How many theatrical versions of Batman Series have there been? a) 5 b) 12 c) 10 ",
"Clint Eastwood gave us the immortal line, 'Go ahead... make my day', in what film? a) Dirty Harry, b) Magnum Force c) Tightrope ",
"Blondie's 'Call Me' , a number one hit for her, was the theme song of which film? a) American Gigolo b) An Officer and a Gentleman, c) Sorry, Wrong Number",
"What was the name of the island on which King Kong was discovered in the original 1933 movie? a) Ape Island b) Monster Island c) Skull Island " ]

var answers = ["c","b","a","a","c"]
score = 0
counter = 0

alert("welcome to quiz game!")
// question 1 
while (counter <=4)
{ 
  alert(questions[counter]);
  var answer = prompt("what is your answer?");

  if (answer === answers[counter])
  {
  alert("correct!");
  score++;
  }
  else
  {
  alert ("not correct");
  }
  
  counter++;
}

alert("your score is " + score + " out of 5 questions");








// Your user loads the page in question.
// The user is presented (using either console.log() or alert() with a multiple choice question
// The user is prompted (using prompt()) for an answer
// Upon answer, the user sees an alert() or console.log()
// telling them whether they answered correctly or incorrectly.
// Then they see the next question (in a new alert() or console.log()),
// and steps 2-4 repeat until there are no more questions.
// Once the user has answered all questions, they see an alert()
// telling them how many they answered correctly (out of however
// many questions there were), and something that looks like a
// percentage. E.g. You answered 7 of 10 questions correctly, good for 70.0%