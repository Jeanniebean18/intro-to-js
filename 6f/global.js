
var side1 = parseInt(prompt("what is one side of the triangle?"));
var side2 = parseInt(prompt("what is another side of the triangle?"));
var side3 = parseInt(prompt("what is the last side of the triangle?"));


//valid triangles must satisfy these rules.
if ((side1+side2 > side3) && (side3+side2 > side1) && (side1+side3 > side2))
{
  alert("That is valid triangle!");
}
else
{
  alert("Not a valid triangle");
}

if (isNaN(side1) || isNaN(side2) || isNaN(side2))
  
{
  alert("Sorry, but one of those is not a number");
}
