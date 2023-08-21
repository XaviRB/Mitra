import React, { useState, useEffect } from 'react';
import { db , auth} from './Firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, query } from 'firebase/firestore';
import Sidebar from './components/sidebar/Sidebar';
import { Navbar } from './components/Navbar';
import { useParams } from 'react-router-dom';

function Chat() {
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  // Here is where you get chatRoomId from the URL parameters
  let { chatRoomId } = useParams();

  // Get current user
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (chatRoomId) {
      const q = query(collection(db, `chatrooms/${chatRoomId}/messages`));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let messageData = [];
        snapshot.forEach((doc) => {
          messageData.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messageData);
      });

      return () => unsubscribe(); // Clean up subscription on unmount
    }
  }, [chatRoomId]);
  
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
        userId: currentUser.uid,  // add this line
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
          <div key={message.id} style={{display: 'flex', justifyContent: message.userId === currentUser ? 'flex-end' : 'flex-start'}}>
            <div style={{
              maxWidth: '60%',
              backgroundColor: message.userId === currentUser ? '#4081ec' : '#f3f3f3',
              color: message.userId === currentUser ? '#ffffff' : '#000000',
              padding: '10px',
              borderRadius: '10px',
              margin: '10px',
            }}>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
        <input
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type a message"
          style={{margin: '10px', padding: '10px', width: '90%'}}
        />
        <button onClick={handleSendMessage} style={{margin: '10px', padding: '10px', backgroundColor: '#4081ec', color: '#ffffff', border: 'none', borderRadius: '5px'}}>Send</button>
      </div>
    </div>
    </>
  );
}

export default Chat;