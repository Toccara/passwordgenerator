
// Assignment Code
//User will click a button to generate the password

var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@","#","$","%","^","&","*","(",")","-","+","="];

//make a function that grabs a random element from an array
function getRandom(arr){
  
  return arr[Math.floor(Math.random()*arr.length)];

};

function generatePassword (){
    // Prompt the user for password criteria: length between 8 and 128, pick upper case, lower case, and special characters
    //Validate at least one password criteria
    //Generate password and display it to the user
    

    //save prompt info for pword length
    var userLength = prompt("How many characters would you like your password to be?"); 

    //validate with if statements to make sure its between 8 and 128
    if (userLength < 8) {
      alert("You need more than 8 characters in your password.");
      return;
    };

    if (userLength > 128) {
      alert("You need to have less than 128 characters in your password.");
      return;
    };

    //ask the user if they want the pword critera eg. uppercase. lowercase etc.
    var hasLowerCase = confirm(
      'Click ok to have Lowercase letters in your password.'
    );

    var hasUpperCase = confirm(
      'Click ok to have Uppercase letters in your password.'
    );

    var hasNumber = confirm(
      'Click ok to have Number letters in your password.'
    );

    var hasSpecial = confirm(
      'Click ok to have Special letters in your password.'
    );

    //validate the user criteria
    if (
      hasLowerCase === false &&
      hasUpperCase === false &&
      hasNumber === false &&
      hasSpecial === false
    ) {
      alert("You must pick at least one criteria for your password.");
      return;
    }

    //final password array
    var results = [];
    //any possible characters for our random function to pick
    var potentialCharacters = [];
    //guaranteed pword criteria characters
    var guaranteedCharacters = [];

    //sort out possible characters for a random password

    if(hasLowerCase){
      potentialCharacters = potentialCharacters.concat(lowerCase);
      guaranteedCharacters.push(getRandom(lowerCase));
    }

    if(hasUpperCase){
      potentialCharacters = potentialCharacters.concat(upperCase);
      guaranteedCharacters.push(getRandom(upperCase));
    }

    if(hasNumber){
      potentialCharacters = potentialCharacters.concat(numbers);
      guaranteedCharacters.push(getRandom(numbers));
    }

    if(hasSpecial){
      potentialCharacters = potentialCharacters.concat(special);
      guaranteedCharacters.push(getRandom(special));
    }

    console.log(potentialCharacters);
    console.log(guaranteedCharacters);

    for (var i = 0; i < userLength ; i++){
      var potentialCharacter = getRandom(potentialCharacters);
      results.push(potentialCharacter);
      console.log(results);
    }

    //use a for loop to replace the first indexes or your results array with guaranteedCharacters array
    for (var i = 0; i < guaranteedCharacters.length ; i++){
      results[i] = guaranteedCharacters[i];
      console.log(results);
    }

    console.log(results);

    //return results so the the password variable becomes defined
    return results;


} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);