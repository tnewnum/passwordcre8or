// Assignment code here
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
console.log(password)
//var special = [!@#$%^&*]
//var number = [1234567890]
//var upper = [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
//var lower = [abcdefghijklmnopqrstuvwxyz]


function generatePassword() {
  console.log("button clicked")

  var box0 = window.prompt("How many Characters would you like to use? min:8 max:128")
  var box1 = window.confirm("Do you want to use special characters?")
  var box2 = window.confirm("Do you want to use numbers?")
  var box3 = window.confirm("Do you want to use UPPER CASE letters?")
  var box4 = window.confirm("Do you want to use lower case letters?")

  console.log(box0)
  console.log(box1)
  console.log(box2)
  console.log(box3)
  console.log(box4)

  if ( box0 >=8 , box0 <= 128 ) {
    console.log(box0)
  }
  else {
    console.log("not valid")
  }

  if (box1 === true)
    console.log("special")

  if (box2 === true)
    console.log("number")

  if (box3 === true)
    console.log("upper") 

  if (box4 === true)
    console.log("lower") 
 
  return "Generated password will go here!";


  math.random

  for loop for each random character 
  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
