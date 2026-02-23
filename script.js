document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput'); 
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');
    const resetButton  = document.getElementById('resetButton');

    const handleGreeting = () =>{
        const name = nameInput.value.trim();
        const greeting = getTime();
        if (name) {
            
            greetingMessage.textContent = `${greeting} ${name}, Welcome here`;
        }else{
            window.alert("Please insert a name")
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




const getTime = () => {
    const hour = new Date().getHours();
    
            if (hour < 12) return "Good Morning oo";
            if (hour < 18) return "Good Afternoon";
            return "Good Evening";
};