var generateBtn = document.querySelector("#generate");


var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_+={}[]:/~";
var numberCharacters = "6546846512379";
var tempPassword = [];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numberOfChar = prompt("Please choose between 8 and 128 characters");

  if (numberOfChar < 8 || numberOfChar > 128) {
    alert("not enough or too many characters")
    return;
  }

  var specialCharacters = confirm("Would you like to use special characters?");
  var number = confirm("Would you like to use numbers?");
  var upper = confirm("Would you like to use uppercase letters?");
  var lower = confirm("Would you like to use lowercase letters?");
  var possibleChars = "";
  
  if (number) {
    possibleChars += numberCharacters
  };
  if (upper) {
    possibleChars += upperCharacter
  };
  if (lower) {
    possibleChars += lowerChar
  };
  if (specialCharacters) {
    possibleChars += specialChar
  };

  console.log(possibleChars)

  var password = ""
  for (var i = 0; i < numberOfChar; i++) {
    password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);
