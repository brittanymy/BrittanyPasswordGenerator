// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(thisIsThePasswordLength) {
  console.log("Button Clicked!") // Confirmation button was clicked
  
  // Give user prompts for password
    // Set character length between 8-128
  



    // Can include lowercase, uppercase, numeric or special characters
  
  // Validated input - At least 1 character type selected

  // Generate password for user based off of prompts
 
  // Display generated password on page
  return "Password will go here!" // 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
