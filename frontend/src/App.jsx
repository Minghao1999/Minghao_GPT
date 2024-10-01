import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSend = async () => {
    if (!inputValue) return;

    // Add user input to conversation
    setConversation([...conversation, { role: 'user', content: inputValue }]);

    try {
      // Send user input to Flask backend
      const response = await axios.post('http://localhost:5000/chat', { message: inputValue });
      const assistantReply = response.data.reply;

      // Add assistant's reply to conversation
      setConversation([...conversation, { role: 'user', content: inputValue }, { role: 'assistant', content: assistantReply }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInputValue('');
  };

  return (
    <div>
      <div>
        {conversation.map((msg, index) => (
          <div key={index}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
