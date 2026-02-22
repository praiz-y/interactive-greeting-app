

  
// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input, button, and greeting message elements
    const nameInput = document.getElementById('nameInput');
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');
    // Add a click event listener to the greet button
    greetButton.addEventListener('click', function() {
        // Get the value from the input field
        const name = nameInput.value.trim();
        // Check if the name is not empty
        if (name) {
            greetingMessage.textContent = `Hello, ${name}! Welcome to the Greeting App!`;
        } else {
            // If the input is empty, prompt the user to enter their name
            greetingMessage.textContent = 'Please enter your name to receive a greeting.';
        }  });
});