// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt (min, max) {
    return Math.floor (Math.random()*(max - min) + min)
}

function randomItem (list) {
  return list [randomInt (0, list.Length -1)]
}

function generatePassword() {
  console.log("Button Clicked!") // Confirmation button was clicked
  
  // Give user prompts for password
  var userInput = window.prompt ("How many characters would you like your password to be?") 

  var passwordLength = parseInt (userInput)

    // Set character length between 8-128
  if (isNaN(passwordLength)) {
    window.alert("That was not a number!")
    return 
  }

  if (passwordLength < 8 && passwordLength > 128) {
    window.alert ("Password length must be between 8 and 128 characters!")
    return
  }

    // Can include lowercase, uppercase, numeric or special characters
  var selectNumbers = window.confirm ("Would you like to add numbers to your password?")
  var selectSymbols = window.confirm ("Would you like to add symbols to your password?")
  var selectLowercase = window.confirm ("Would you to add lowercase letters to your password?")
  var selectUpppercase = window.confirm ("Would you to add uppercase letters to your password?")

  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", "`", "[", "]", "{", "}"]
  var lowesrcaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upppercaseList = []

  var givenOptions = []
  console.log (givenOptions)

  for (var i =0; i < lowesrcaselist.Length; i++) {
    upppercaseList [i] = lowesrcaselist [i].toLocaleUpperCase
  }

  if (selectNumbers === true) {
    givenOptions.push (numbersList)
  }

  if (selectSymbols === true) {
    givenOptions.push (symbolsList)
  }

  if (selectLowercase === true) {
    givenOptions.push (lowesrcaselist)
  }

  if (selectUpppercase === true) {
    givenOptions.push (upppercaseList)
  }

  // Validated input - At least 1 character type selected

  var selectedCharacters = ""



  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem (givenOptions)
    var randomCharacter = getRandomItem (randomList)
    console.log (randomCharacter)
  }





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
