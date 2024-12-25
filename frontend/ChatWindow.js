// Importing necessary libraries
import React, { useState } from 'react';  // React library and useState hook for managing state
import axios from 'axios';  // Axios for making HTTP requests

const ChatWindow = () => {
    // useState hooks to manage state for messages and input
    const [messages, setMessages] = useState([]);  // To store all chat messages
    const [input, setInput] = useState('');  // To store the current input from the user

    // Function to send a message
    const sendMessage = async () => {
        // Prevent sending if the input is empty or contains only spaces
        if (!input.trim()) return;

        // Update the state to include the user's message
        setMessages([...messages, { sender: 'user', text: input }]);

        // Send the message to the backend server using axios
        try {
            // Send a POST request to the server with the user's input
            const response = await axios.post('http://localhost:5000/chat', { message: input });
            
            // Update the state to include both the user's message and the bot's response
            setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: response.data.reply }]);
        } catch (error) {
            // If there's an error (e.g., server is down), display an error message from the bot
            setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'Error connecting to server.' }]);
        }

        // Clear the input field after sending the message
        setInput('');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            {/* Chat display area */}
            <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
                {/* Map through messages and display each message */}
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                        {/* Display "You" for user messages and "Bot" for bot messages */}
                        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}: </strong>
                        {msg.text}  {/* Show the actual message text */}
                    </div>
                ))}
            </div>

            {/* Input field for typing messages */}
            <input
                type="text"  // Text input type
                value={input}  // Controlled input field, value is tied to the 'input' state
                onChange={(e) => setInput(e.target.value)}  // Update input state as the user types
                style={{ width: '80%', padding: '10px', marginRight: '10px' }}  // Basic styling for input field
            />
            
            {/* Button to send the message */}
            <button onClick={sendMessage} style={{ padding: '10px' }}>
                Send
            </button>
        </div>
    );
};

// Export the ChatWindow component to use it in other parts of the application
export default ChatWindow;
