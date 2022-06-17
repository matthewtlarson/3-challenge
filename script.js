// Assignment Code
var generateBtn = document.querySelector("#generate");

// declare all your variables
var upper = ['A', 'B', 'C',];
var lower = a;
var special = a;
var number = a;
var tempPassword = [];

//declare generatePassword function
//var numOfChar = prompt (...)
//prompt - "please chose between 8 and 128 characters"
// Form validation - If/else statement
// if - numbofChar<8 || numbofChar>128 - alert "nope" - invoke generate password func again
// else - good, create confirms for if want upper, lower, special, numbers - Truthy ot falsy value
//Iterate(FOR LOOP) through each answer and if true, add the values from that variable into a tempPassword array
//once tempPassword array is full of avaiable characters, use Math.Floor(Random) to chose characters from the tempPassword[index] and push into password array the number that was chosen from the first prompt
//return password;
 /*for (let index = 0; index < numOfChar + 1; index++) {
  const element = array[index];
  
 }*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {
  var numberOfChar = prompt("Please choose between 8 and 128 characters");
  
  if (numberofChar < 8 || numberOfChar > 128) {
    alert ("not enough or too many characters")
    return;
  } else {
    var specialCharacters = confirm("How many special characters would you like to use?");
  var number = confirm("How many numbers would you like to use?");
  var upper = confirm("How many uppercase characters would you like to use?");
  var lower = confirm("How many lowercase characters would you like to use?");
  }
  

 

  for (var i = 0; i < numberofChar +1; i++) {
    var password = numberofChar[i];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

