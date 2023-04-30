////////chAPTER 21-25//////////////////////
/////////////////question 1//////////////////////////

// Get user inputs for first and last name using prompt
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");

// Merge first and last name into a new variable titled fullName
var fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "!");

/////////////////question 2/////////////////////

// Get user input about their favorite mobile phone model using prompt
var phoneModel = prompt("Please enter your favorite mobile phone model:");

// Find the length of the user input
var inputLength = phoneModel.length;

// Display the length of the user input in the browser
document.write("The length of your favorite mobile phone model is " + inputLength + " characters. <br><br>");

//////////////////question 3/////////////////////////////////

// Define the word "Pakistani"
var word = "Pakistani";

// Find the index of the letter "n" in the word
var index = word.indexOf("n");

// Display the result in the browser
document.write("The index of letter 'n' in the word 'Pakistani' is: "+ index + "<br><br>");

////////////////////question 4////////////////////////////////////////

// Define the word "Hello World"
var word = "Hello World";

// Find the last index of the letter "l" in the word
var lastIndex = word.lastIndexOf("l");

// Display the result in the browser
document.write("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex  + "<br><br>");

/////////////////////////question 5//////////////////////////////////////

// Define the word "Pakistani"
var word = "Pakistani";

// Find the character at the 3rd index in the word
var char = word.charAt(3);

// Display the result in the browser
document.write("The character at the 3rd index in the word 'Pakistani' is: " + char  + "<br><br>");

///////////////////////question 6//////////////////////////////////////////////////

// Get user input for first name using prompt
var firstName = prompt("Please enter your first name:");

// Get user input for last name using prompt
var lastName = prompt("Please enter your last name:");

// Concatenate first and last name using concat() method
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome to our website.");

/////////////////////////question 7//////////////////////////////////////////

// Define the word "Hyderabad"
var word = "Hyderabad";

// Replace "Hyder" with "Islam" using replace() method
var newWord = word.replace("Hyder", "Islam");

// Display the result in the browser
document.write("The new word is: " + newWord + "<br><br>");

///////////////////////////question 8////////////////////////////////////////////////

// Define the message
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&" using replace() method
var newMessage = message.replace(/and/g, "&");

// Display the result in the browser
document.write("The new message is: " + newMessage + "<br><br>");

///////////////////////////////question 9///////////////////////////////////////////////////////

// Define the string "472"
var str = "472";

// Convert the string to a number using parseInt() function
// var num = parseInt(str);

// // Display the values and types in the browser
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num  + "<br><br>");

///////////////////////////////question 10/////////////////////////

// Ask the user for input
var input = prompt("Enter some text:");

// Convert the input to capital letters using toUpperCase() method
var capitalInput = input.toUpperCase();

// Display the result in the browser
document.write("The input in capital letters is: " + capitalInput + "<br><br>");

/////////////////////////question 11///////////////////////////////////////

// Ask the user for input
var input = prompt("Enter some text:");

// Convert the input to title case
var titleInput = input.split(" ").map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

// Display the result in the browser
document.write("The input in title case is: " + titleInput + "<br><br>");

/////////////////////////question 12//////////////////////////////////////////

//Initialize the num variable
var num = 35.36;

// Convert the num variable to a string using toString() method
var numString = num.toString();

// Remove the dot from the string using replace() method
var newString = numString.replace(".", "");

// Display the result in the browser
document.write("The number with dot is: " + num + "<br>");
document.write("The number without dot is: " + newString + "<br><br>");
 
///////////////////////question 13////////////////////////////////////////

// Ask the user for a username
var username = prompt("Enter a username:");

// Define an array of special characters to check for
var specialChars = ["@", ".", ",", "!"];

// Initialize a boolean variable to track if the username is valid
var isValid = true;

// Loop through the specialChars array and check if the username contains any of them
for (var i = 0; i < specialChars.length; i++) {
  if (username.indexOf(specialChars[i]) !== -1) {
    // The username contains a special character
    isValid = false;
    break;
  }
}

// If the username is not valid, prompt the user to enter a new username
if (!isValid) {
  alert("Please enter a valid username");
  username = prompt("Enter a username:");
}

// Display the username in the browser
document.write("Your username is: " + username + "<br><br>");

//////////////////////question 14///////////////////////////////////////

// Define the array of items
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// Ask the user for an item to search for
var itemToSearch = prompt("Enter an item to search for:");

// Initialize a boolean variable to track if the item is found
var isFound = false;

// Loop through the items array and check if the user's search term matches any of the items
for (var i = 0; i < items.length; i++) {
  if (itemToSearch.toLowerCase() === items[i].toLowerCase()) {
    // The item is found
    isFound = true;
    break;
  }
}

// If the item is found, display a message indicating it was found. Otherwise, display a message indicating it was not found.
if (isFound) {
  alert(itemToSearch + " is found in the list!");
} else {
  alert(itemToSearch +  "is not found in the list." + "<br><br>");
}

/////////////////////////question 15////////////////////////////////////////////

//   // Function to check if the password meets the requirements
// function checkPassword(password) {
//   // Check if the password contains alphabets and numbers
//   if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     return false;
//   }

//   // Check if the password starts with a letter
//   var firstCharacter = password.charAt(0);
//   if (!isNaN(parseInt(firstCharacter))) {
//     return false;
//   }

//   // Check if the password is at least 6 characters long
//   if (password.length < 6) {
//     return false;
//   }

//   return true;
// }

// // Prompt the user for input until a valid password is entered
// var validPassword = false;
// while (!validPassword) {
//   var password = prompt("Enter a password:");

//   // Call the checkPassword function to validate the password
//   validPassword = checkPassword(password);

//   // If the password is not valid, prompt the user to enter a valid password
//   if (!validPassword) {
//     alert("Please enter a valid password.");
//   }
// }

// // Inform the user that the password is valid
// alert("Password is valid.");


/////////////ques 16/////////////////
var university = "University of Karachi";

// Display each character of the string on a new line in the browser
for (var i = 0; i < university.length; i++) {
  document.write(university[i] + "<br>"+"<br>"+"<br>");
}


////////////////ques 17///////////////
var userInput = prompt("Enter anything :");

var lastCharacter = userInput.charAt(userInput.length - 1);

alert("The last character is: " + lastCharacter);


//////////ques 18////////////
var sentence = "The quick brown fox jumps over the lazy dog";
var word = "the";

// Convert the sentence and word to lowercase for case-insensitive comparison
var lowerSentence = sentence.toLowerCase();
var lowerWord = word.toLowerCase();

// Split the sentence into an array of words
var wordsArray = lowerSentence.split(" ");

// Count the number of occurrences of the word
var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
if (wordsArray[i] === lowerWord) {
  count++;
}
}
document.write(sentence,"<br>");
document.write("The word 'the' occurs " + count + " times in the given sentence.");
/////////////////////CHAPTER 26-30///////////////////////////
//////////////////QUESTION 1/////////////////////

// Prompt user for positive integer
let num = prompt("Enter a positive integer:");

// Convert input to number and check if it's positive
if (isNaN(num) || num <= 0) {
  document.write("Invalid input. Please enter a positive integer.");
} else {
  // Calculate round, floor, and ceil values
  let roundNum = Math.round(num);
  let floorNum = Math.floor(num);
  let ceilNum = Math.ceil(num);

  // Display results in browser
  document.write("<p>Number: " + num + "</p>");
  document.write("<p>Round value: " + roundNum + "</p>");
  document.write("<p>Floor value: " + floorNum + "</p>");
  document.write("<p>Ceil value: " + ceilNum + "</p>");
}

/////question # 2///////

let num1 = parseFloat(prompt("Enter a negative floating point number:"));

document.write("<p>Number: " + num1 + "</p>");
document.write("<p>Round off value: " + Math.round(num1) + "</p>");
document.write("<p>Floor value: " + Math.floor(num1) + "</p>");
document.write("<p>Ceil value: " + Math.ceil(num1) + "</p>");


/////question # 3///////


let num2 = prompt("Enter a number:"); // prompts the user to enter a number
let abs = Math.abs(num2); // calculates the absolute value of the input number using the built-in Math.abs() method
alert("The absolute value of " + num2 + " is " + abs); // displays the result in an alert box


/////question # 4///////

// Simulate rolling a six-sided dice
let diceValue = Math.floor(Math.random() * 6) + 1;

// Display the dice value
console.log("You rolled a " + diceValue);

//QUESTION-5

function coinToss() {
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? "Heads" : "Tails";
  document.getElementById("result").innerHTML = `The coin landed on ${result}!`;
}


// QUESTION-6

// function generateRandomNumber() {
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// document.getElementById("result").innerHTML = `Your random number is ${randomNumber}!`;
// }

// /////////////////////////////////////////////////



// QUESTION-7

// userInput = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + userInput);




// ///////////////////////////////////////////////


// QUESTON-8

// userInput = prompt("Enter a number between 1 to 10");
// document.write("User enters the number " + userInput);
// secretNumber = Math.floor(Math.random() * 10) +1;
// if (userInput == secretNumber) {
//     document.write("Congratulations! You guessed the secret number!");
// } else {
//     document.write("Sorry, the secret number was " + secretNumber + " Try Again!");