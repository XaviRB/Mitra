import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../../Firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import Sidebar from '../sidebar/Sidebar';
import { Navbar } from '../Navbar';
import { useParams } from 'react-router-dom';
import {Footer} from '../Footer'

function Chat() {
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const endOfMessagesRef = useRef(null);
  let { chatRoomId } = useParams();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (chatRoomId) {
      setCurrentChat(chatRoomId);
      const messagesRef = collection(db, `chatrooms/${chatRoomId}/messages`);
      const q = query(messagesRef, orderBy("timestamp", "asc"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messageData = [];
        querySnapshot.forEach((doc) => {
          messageData.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messageData);
        scrollToBottom();
      });

      return () => unsubscribe();
    }
  }, [chatRoomId]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (chatRoomId && newMessage.trim() !== '') {
      try {
        const messagesRef = collection(db, `chatrooms/${chatRoomId}/messages`);
        await addDoc(messagesRef, {
          message: newMessage,
          timestamp: serverTimestamp(),
          userId: currentUser.uid,
        });
        setNewMessage('');
        scrollToBottom();
      } catch (err) {
        console.error('Error sending message:', err);
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="main-content">
          <div className="messages-wrapper">
            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble ${message.userId === currentUser.uid ? 'right' : ''}`}>
                <span className="user-message">{message.message}</span>
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>
          <form onSubmit={handleSendMessage} className="send-message">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;