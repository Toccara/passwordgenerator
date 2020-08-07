// Assignment Code
//User will click a button to generate the password

var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@","#","$","%","^","&","*","(",")","-","+","="];

console.log(lowerCase);

//make a function that grabs a random element from an array
function getRandom(arr){

    return arr[Math.floor(Math.random()*arr.length)];

}``


console.log(getrandom(arr));


function generatePassword (){
    // Prompt the user for password criteria: length between 8 and 128, pick upper case, lower case, and special characters
    //Validate at least one password criteria
    //Generate password and display it to the user
    

    //save prompt info for pword length
    prompt("How many characters would you like your password to be?")

    //validate with if statements to make sure its between 8 and 128
    if(){

    // }

    //ask the user if they want the pword critera eg. uppercae. lowercase etc.

    //promt("user selectsif they want lowercase")

    //validate the user criteria
    if(){

    // }
    
    //final password array
    var results = [];
    //any possible characters for our random function to pick
    var potentialCharacters = [];
    //guaranteed pword criteria characters
    var guaranteedCharacters = [];

    //sort out possible characters for a random password





}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("onclick", writePassword);