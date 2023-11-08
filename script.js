document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("userInput");
    const sendMessage = document.getElementById("sendMessage");

    sendMessage.addEventListener("click", async function() {
        const userMessage = userInput.value;

        // Send the user message to your Node.js backend
        const response = await fetch('https://chat-bot-4.onrender.com/getResponse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userPrompt: userMessage }),
        });

        const responseData = await response.json();
        const chatbotResponse = responseData.chatbotResponse;

        // Append the chatbot's response to the chatbox
        chatbox.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
        chatbox.innerHTML += `<div><strong>Chatbot:</strong> ${chatbotResponse[0].content}</div>`;

        // Clear the user input field
        userInput.value = '';
    });
});