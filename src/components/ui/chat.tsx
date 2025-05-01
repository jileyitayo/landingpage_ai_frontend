'use client';

import { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle message submission here
        if (input.trim() === '') return;
        
        console.log(messages);
        // Add the new message to the chat
        setMessages((prevMessages) => [...prevMessages, input]);
        setInput(''); // Clear the input field
    };

    return (
        <div className="flex flex-col w-full max-w-2xl h-[500px] border rounded-lg shadow-md bg-white">
          {/* Header */}
          <div className="p-4 border-b bg-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">Chat Assistant</h2>
          </div>
    
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className="p-2 rounded-lg bg-blue-100 text-gray-800 max-w-fit"
              >
                {message}
              </div>
            ))}
          </div>
    
          {/* Input Box */}
          <div className="p-4 border-t bg-gray-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Chat;