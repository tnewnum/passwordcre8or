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



function generatePassword() {
  console.log("button clicked")

    
//Ask user questions and get responses
  var box0 = window.prompt("How many Characters would you like to use? min:8 max:128");

  if (!box0) {
    alert("Please Enter Password Length");
    
  }else if (box0 <8 || box0 > 128) {
    alert("Please choose a number bewteen 8 and 128");

  }else{
    var box1 = window.confirm("Do you want to use special characters?");
    var box2 = window.confirm("Do you want to use numbers?");
    var box3 = window.confirm("Do you want to use UPPER CASE letters?");
    var box4 = window.confirm("Do you want to use lower case letters?");
  };
  

  //picks a random character from the string being used in that function 
/*if (box1 === true ) {

  function ranSpecial() {
     ranSpecialVar = special[Math.floor(Math.random() * special.length)]
    return ranSpecialVar;
    
  }
  ranSpecial();
  console.log(ranSpecialVar);
} else {
var ranSpecialVar = ""
console.log("box1 was false")
};
*/


function ranSpecial() {
  ranSpecialVar = special[Math.floor(Math.random() * special.length)]
 return ranSpecialVar;
 
}
ranSpecial();
console.log(ranSpecialVar);

  function ranNumber() {
    ranNumberVar = number[Math.floor(Math.random() * number.length)]
    return ranNumberVar;

  }
  ranNumber()
  console.log(ranNumberVar);


  function ranUpper() {
    ranUpperVar = upper[Math.floor(Math.random() * upper.length)]
    return ranUpperVar;
  }

  ranUpper()
  console.log(ranUpperVar);

  function ranLower() {
    ranLowerVar = lower[Math.floor(Math.random() * lower.length)]
    return ranLowerVar;
  }

  ranLower() 
  console.log(ranLowerVar);



  //Uses the above random characters and puts them into an array

var randomCharList = [ranSpecialVar, ranNumberVar, ranUpperVar, ranLowerVar];
console.log(randomCharList);
  
//loops that the above varabile to make password
  for (var i = 0; i <= box0; i++){

  var randomPasswordChar = randomCharList[Math.floor(Math.random() * randomCharList.length)]; 
   randomPassword = randomPassword + randomPasswordChar;
   console.log(randomPassword);

  };
 
  return randomPassword;


 
};


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