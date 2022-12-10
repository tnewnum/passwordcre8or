// Assignment code here
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var special = "!@#$%^&*".split("")
var number = "1234567890".split("")
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lower = "abcdefghijklmnopqrstuvwxyz".split("")



function generatePassword() {
  console.log("button clicked")

  var box0 = window.prompt("How many Characters would you like to use? min:8 max:128")
  var box1 = window.confirm("Do you want to use special characters?")
  var box2 = window.confirm("Do you want to use numbers?")
  var box3 = window.confirm("Do you want to use UPPER CASE letters?")
  var box4 = window.confirm("Do you want to use lower case letters?")
  var passwordLength = [box0]
  var passwordLength = [box0]


  if (box0>7 && box0<129) { 
    console.log("TRUE")
  }
  else {
    alert("!!YOUR PASSWORD SHOULD BE BETWEEN 8 and 128 characters!!")
  }
  
  for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * special.length + number.length + upper.length + lower.length);

  password += (randomNumber, randomNumber)

  }
 
  return password += (randomNumber, randomNumber);


 
}


  //for loop for each random character 
  





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*
  if (box1 === true)
    console.log("special")

  if (box2 === true)
    console.log("number")

  if (box3 === true)
    console.log("upper") 

  if (box4 === true)
    console.log("lower") 
*/