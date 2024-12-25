
import React from 'react';  // Import React library
import ChatWindow from './components/ChatWindow';  // Import the ChatWindow component

// Main App component
function App() {
    return (
        <div>
            {/* Heading of the chatbot app */}
            <h1 style={{ textAlign: 'center' }}>Chatbot</h1>

            {/* ChatWindow component where users interact with the chatbot */}
            <ChatWindow />
        </div>
    );
}

export default App;  // Export the App component for use in other parts of the app
