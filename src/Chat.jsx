import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, query } from 'firebase/firestore';
import Sidebar from './components/Sidebar';
import { Navbar } from './components/Navbar';

function Chat() {
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (currentChat) {
      const q = query(collection(db, `chatrooms/${currentChat}/messages`));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let messageData = [];
        snapshot.forEach((doc) => {
          messageData.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messageData);
      });

      return () => unsubscribe(); // Clean up subscription on unmount
    }
  }, [currentChat]);

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, `chatrooms/${currentChat}/messages`), {
        message: newMessage,
        timestamp: serverTimestamp(),
        // Add more message details here like user id, name etc.
      });
      setNewMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
    }
  }

  return (
    <>
    <Navbar/>
    <div className="main">
      <Sidebar onChatStart={setCurrentChat} />
      <div className="main-content">
        {messages.map(message => (
          <div key={message.id}>
            <p>{message.message}</p>
            {/* Format and display message data here */}
          </div>
        ))}
        <input
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </>
  );
}

export default Chat;
