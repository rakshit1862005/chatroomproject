'use client';

import Sidebar from '../component/sidebar';
import { useState, useEffect } from 'react';
import UserList from './UserList';
import axios from 'axios';

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [allMessages, setAllMessages] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.post(
          'https://rjlp2mzq-8000.inc1.devtunnels.ms/api/lastchats',
          { username: 'userxyz' }
        );

        console.log("API Response:", res);
        const data = res.data;

        const usersArray = Array.isArray(data) ? data : data.data;

        const formattedUsers = usersArray.map((item) => ({
          id: item._id,
          name: item.userid,
        }));

        console.log("Formatted Users:", formattedUsers);
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

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
    <div
      className="flex h-screen border rounded-lg"
      style={{
        padding: '30px',
        marginLeft: '18%',
        marginTop: '20px',
        marginRight: '20px',
        marginBottom: '20px',
      }}
    >
      <Sidebar />
      <UserList
        users={users}
        onSelectUser={setSelectedUser}
        selectedUser={selectedUser}
      />
    </div>
  );
}
