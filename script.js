document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput'); 
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');
    const resetButton  = document.getElementById('resetButton');
    const errorMessages = [
        "Please insert a name",
        "Name field cannot be empty",
        "Oops! You forgot to type your name",
        "We need your name to greet you",
        "Don't leave the name box blank!"
    ];

    const welcomeMessages = [
        "Welcome here",
        "Glad to see you",
        "Nice having you around",
        "Happy you're here",
        "Great to meet you"
    ];


    const getTime = () => {
    const hour = new Date().getHours();
    
        if (hour < 12) return "Good Morning oo";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    const handleGreeting = () =>{
        const name = nameInput.value.trim();
        
        if (name) {
            const randomWelcome = welcomeMessages[Math.floor(Math.random() * 5)];
            const greeting = getTime();
            greetingMessage.textContent = `${greeting} ${name}, ${randomWelcome}`;
            greetingMessage.classList.remove("error-msg");
            nameInput.classList.remove("error");

        }else{
            const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            greetingMessage.textContent = randomError;
            greetingMessage.classList.add("error-msg");
            nameInput.classList.add("error");
            nameInput.focus();  
        }

    };

    greetButton.addEventListener('click', handleGreeting);
    nameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleGreeting();
        }
    });
    resetButton.addEventListener('click', () => {
        greetingMessage.textContent = "";
        nameInput.value = "";
        nameInput.focus();
    });
});




