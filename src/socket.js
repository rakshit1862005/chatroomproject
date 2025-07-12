// socket.js
import { io } from 'socket.io-client';

let socket;

  socket = io('http://localhost:8000', {
    autoConnect: true,
    transports: ['websocket'], 
  });

export default socket;
