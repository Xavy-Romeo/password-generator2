// Assignment code here

// Create all possible characters for password
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5'];
var symbol = ['~','!','@','#','$','%','^','&','*','(',')','_','?','+','!','@','#','$','%','^','&','*','(',')','_','?'];

var charsAvailable = [];
var numbOfChars = 0;
password = '';

function generatePassword() {
  howManyChars();
 
  for (i = 0; i < numbOfChars; i++) {
    password += charsAvailable[Math.floor((Math.random()*charsAvailable.length))];
  }
  return password;
}

// Ask User how many characters they would like in their password
function howManyChars() {
  numbOfChars = prompt('How many characters would you like in your password? Please enter a number between "8" and "128".')
  parseInt(numbOfChars);
  if (numbOfChars >= 8 && numbOfChars <= 128) {
    passwordOptions();
  }
  else {
    alert('Please enter a valid option.');
    howManyChars();
  }
}

function passwordOptions() {
  // Ask User what type of characters they would like in their password
  var passOptWant = prompt('What would you like in your randomly generated password? Type all that apply. Type "U" for uppercase letters, "L" for lowercase letters, "N" for numbers, and "S" for symbols.');
  passOptWant = passOptWant.toLowerCase();
  
  //vars for if statements
  var great = "Great. Your password will be randomly generated. :)";
  var u = passOptWant.includes('u');
  var l = passOptWant.includes('l');
  var n = passOptWant.includes('n');
  var s = passOptWant.includes('s');
  
    // if u is inputed by user
    if (u) {
        alert(great);
        charsAvailable = charsAvailable.concat(upper);
        if (l) {
          charsAvailable = charsAvailable.concat(lower);
           if (n) {
            charsAvailable = charsAvailable.concat(number);
              if (s) {
                charsAvailable = charsAvailable.concat(symbol);
              }
            }
            else if (s) {
              charsAvailable = charsAvailable.concat(symbol);
            }
        }
        else if (n) {
          charsAvailable = charsAvailable.concat(number);
          if (s) {
            charsAvailable = charsAvailable.concat(symbol);
          }
        }   
        else if (s) {
          charsAvailable = charsAvailable.concat(symbol);
        }
    }
    
    // if no u but l is inputed
    else if (l) {
      alert(great);
      charsAvailable = charsAvailable.concat(lower);
      if (n) {
        charsAvailable = charsAvailable.concat(number);
        if (s) {
          charsAvailable = charsAvailable.concat(symbol);
        }      
      }
      else if (s) {
        charsAvailable = charsAvailable.concat(symbol);
      }
    }

    // if no u nor l but n is inputed
    else if (n) {
      alert(great);
      charsAvailable = charsAvailable.concat(number);
      if (s) {
        charsAvailable = charsAvailable.concat(symbol);
      }
    }

    // if no u nor l nor n but s is inputed
    else if (s) {
      alert(great);
      charsAvailable = charsAvailable.concat(symbol);
    }

    // if no u,l,n or s is inputed request valid option
    else {
      alert("Please enter a valid option.");
      passwordOptions();
    }
     
}

// Ask to generate a different password
function reset() {
  generateBtn.textContent = "Generate a New Password"
  
  //reset password to empty string
  password = '';
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

  //***added reset function to generate new password***
  reset();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
