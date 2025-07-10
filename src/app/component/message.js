'use client';

import Sidebar from '../component/sidebar';
import { useState } from 'react';
import UserList from './UserList';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [allMessages, setAllMessages] = useState({});

  const handleSendMessage = (userId, message) => {
    setAllMessages((prev) => {
      const userMsgs = prev[userId] || [];
      return {
        ...prev,
        [userId]: [...userMsgs, message],
      };
    });
  };

  return (
    <div className="flex h-screen border rounded-lg" style= {{padding:'30px', marginLeft:'18%', marginTop: '20px', marginRight:'20px', marginBottom:'20px'}}>
        <Sidebar></Sidebar>
        <UserList
            users={users}
            onSelectUser={setSelectedUser}
            selectedUser={selectedUser}
        />
    </div>
  );
}

