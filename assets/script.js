// Assignment code here
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomPassword = "";
var ranSpecialVar ;
var ranNumberVar ;
var ranUpperVar ;
var ranLowerVar ;
var choosenText = [];

//entire function to generate password
function generatePassword() {
  console.log("button clicked")

    
//Ask user questions and get responses
  var box0 = window.prompt("How many Characters would you like to use? min:8 max:128");

  if (!box0) {
    alert("Please Enter Password Length");
    generatePassword();
    
  }else if (box0 <8 || box0 > 128) {
    alert("Please choose a number bewteen 8 and 128");
    generatePassword();

  }else{
    var box1 = window.confirm("Do you want to use special characters?");
    var box2 = window.confirm("Do you want to use numbers?");
    var box3 = window.confirm("Do you want to use UPPER CASE letters?");
    var box4 = window.confirm("Do you want to use lower case letters?");
  }
  if (!box1 && !box2 && !box3 && !box4) {
    alert("Please select at least one option!")
    generatePassword();
  }

  randomPassword = "";

//If statements gto select what arrays we want to choose the password from
  if (box1) {

  choosenText = choosenText.concat(special) 
  }

  if (box2) {
  
    choosenText = choosenText.concat(number) 
  }

  if (box3) {
  
    choosenText = choosenText.concat(upper)
  }
  
  if (box4) {
  
    choosenText = choosenText.concat(lower)
  }

    console.log(choosenText)



//loops that the above varabile to make password
  for (var i = 0; i < box0; i++){

  var randomPasswordChar = choosenText[Math.floor(Math.random() * choosenText.length)]; 
   randomPassword = randomPassword + randomPasswordChar;
   console.log(randomPassword);
}; 

  choosenText = []
  return randomPassword; 
  
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





