import React, { useState, useRef, useEffect } from 'react';
import './Chatui.scss'

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome! How can I help you today?', sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    const newBotMessage = {
      id: messages.length + 2,
      text: `Echo: ${inputMessage}`,
      sender: 'bot'
    };

    setMessages(prevMessages => [
      ...prevMessages, 
      newUserMessage, 
      newBotMessage
    ]);

    setInputMessage('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.sender}`}
          >
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input 
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
          className="message-input"
        />
        <button 
          onClick={handleSendMessage}
          className="send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;