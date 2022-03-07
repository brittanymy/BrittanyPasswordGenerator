// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt (min, max) {
  if (!max) {
    max = min 
    min = 0 
  }
  var randomNumber = Math.random ()
  return Math.floor (min + (1 - randomNumber) * max)
}

function getRandomItem (list) {
  return list [randomInt (list.length)]
}

// Password generation function
function generatePassword() {
  console.log("Button Clicked!") // Confirmation button was clicked
  
  while (true) {
    // Give user prompts for password
    var userInput = window.prompt ("How many characters would you like your password to be?") 

    //Allows user to exit out of prompt 
    if (userInput === null) {
      return 
    }

    var passwordLength = parseInt (userInput)
    
    // Set character length between 8-128
    if (isNaN(passwordLength)) {
      window.alert("That was not a number!")
    } else if (passwordLength < 8 && passwordLength > 128) {
      window.alert ("Invalid password length! Length should be between 8 and 128 characters!") 
    } else {
      break
    }
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

  for (var i =0; i < lowesrcaselist.length; i++) {
    upppercaseList [i] = lowesrcaselist [i].toUpperCase() 
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

 // Alternative option if no prompts are selected
  if (givenOptions.length === 0) {
    givenOptions.push(lowesrcaselist)
  }

  // Validated input - At least 1 character type selected

  var selectedCharacters = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem (givenOptions)
    var randomCharacter = getRandomItem (randomList)
    selectedCharacters += randomCharacter
  }

  // Generate password for user based off of prompts
  console.log (selectedCharacters)
  
  // Display generated password on page
  return selectedCharacters
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    return
  }

  if (password) {
    passwordText.textContent = password;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
