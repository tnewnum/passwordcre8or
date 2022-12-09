// Assignment code here

//var special = (!, #, $, %, ^, &, *)
//var number = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
//var upper = (A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z)
//var lower = (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z)

//for(var s = 0; i <= special.length; i++)
//for(var n = 0; i <= number.length; i++)
//for(var u = 0; i <= upper.length; i++)
//for(var l = 0; i <= lower.length; i++)

var box0 = window.prompt("How many Characters would you like to use? min:8 max:128")
var box1 = window.confirm("Do you want to use special characters?")
var box2 = window.confirm("Do you want to use numbers?")
var box3 = window.confirm("Do you want to use UPPER CASE letters?")
var box4 = window.confirm("Do you want to use lower case letters?")

//box0.addEventListener('input', )
//box1.addEventListener("click", )
//box2.addEventListener("click", )
//box3.addEventListener("click", )
//box4.addEventListener("click", )

if (box0.addEventListener === true) 
if (box1.addEventListener === true)
if (box2.addEventListener === true)
if (box3.addEventListener === true)
if (box4.addEventListener === true)



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// special characters 
// numbers  
// upper case 
// lower case 
// pop up windows to ask DONE
// yes or no buttons - already in there, but maybe  a click? 
