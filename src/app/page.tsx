"use client";

import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "What calendar-related task can I help you with?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // TODO: Backend Configuratin
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow">
        <div className="mb-4 space-y-2">
          {messages.map((msg, i) => (
            <div key={i} className={`text-${msg.sender === "user" ? "right" : "left"}`}>
              <span className="block p-2 rounded bg-gray-200">
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Type your message..."
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">Send</button>
        </form>
      </div>
    </div>
  );
}