'use client';

import { useState } from 'react';

export default function MessageSection({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [allMessages, setAllMessages] = useState({});
  const [input, setInput] = useState('');

  const messages = selectedUser ? allMessages[selectedUser.id] || [] : [];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      text: input,
      sender: 'You',
      timestamp: new Date().toLocaleTimeString(),
    };
    setAllMessages((prev) => {
      const userMsgs = prev[selectedUser.id] || [];
      return {
        ...prev,
        [selectedUser.id]: [...userMsgs, newMessage],
      };
    });
    setInput('');
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/6" style={{}}>
        <h2 className="flex justify-center text-xl items-center font-semibold" style={{}}>
          Users
        </h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`border rounded-lg border-[#1A1A1A] py-2 px-4 cursor-pointer ${
                selectedUser?.id === user.id
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'hover:bg-[#252424]'
              }`}
              style={{ padding: '10px', margin: '5px' }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {!selectedUser ? (
        <div className="flex flex items-center justify-center text-gray-500 text-xl min-w-5/6">
          Select a user to start chatting.
        </div>
      ) : (
        <div className="flex flex-col flex-1 p-4 min-w-3/6">
          <div className="text-xl font-semibold border-b pb-2 mb-4">
            Chat with {selectedUser.name}
          </div>

          <div className="flex overflow-y-auto space-y-3 mb-4 p-2 bg-white rounded-lg border">
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div className="text-sm text-gray-600">
                  {msg.sender} <span className="text-xs">({msg.timestamp})</span>
                </div>
                <div className="ml-2">{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
