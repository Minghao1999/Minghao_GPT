import React from 'react';

const Message = ({ messages }) => {
    return (
        <div className="chat-messages">
            {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default Message;
