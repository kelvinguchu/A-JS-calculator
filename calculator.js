// Get the HTML input box element by its ID and store it in a variable
let display = document.getElementById('displayPanel');

// Function to add a value to the end of the input box's text and then append the value to the current value
function addToDisplay(value) {
	display.value += value;
};

// Function to clear the input box's text by setting the input box's value to an empty string
function clearInput() {
	display.value = '';
};

// Function to remove the last character from the input box's text by using the slice() method
function backspace() {
	display.value = display.value.slice(0, -1);
};

/* Function to evaluate the input box's text as a mathematical expression and display the result
by using the eval method and setting the input box value to that result*/
function calculate() {
	let result = eval(display.value);
	display.value = result;
};
//IT IS NEVER ADVISABLE TO USE THE eval() IN REAL LIFE APPLICATIONS TO AVOID VULNERABILITIES TO YOUR APPLICATION!!!!!