import React, { useEffect, useState } from "react";
import { db } from '../Firebase';
import { onSnapshot, collection, query, doc, updateDoc, arrayUnion } from 'firebase/firestore';

const ChatWindow = (props) => {
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'users', 'authUserId', 'contacts')); // replace 'authUserId' with the authenticated user's id
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let contactsData = [];
      snapshot.forEach((doc) => {
        contactsData.push({ id: doc.id, ...doc.data() });
      });
      setContacts(contactsData);
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [props.id]);

  useEffect(() => {
    if (contacts) {
      const temp = contacts.find(contact => contact.contactUserId === props.id);
      if (temp && temp.messages.length > 0){
        setMessages(temp.messages);
      }
    }
  }, [contacts, props.id]);

  const handleMessageSend = async (msg) => {
    if (msg.length > 0) {
      const newMessage = {
        from: "You",
        to: props.name,
        message: msg,
        timestamp: Date.now(),
        weAreSender: true
      };

      setMessages(prevMessages => [...prevMessages, newMessage]);

      // update the auth user's contacts
      const authUserDoc = doc(db, 'users', 'authUserId', 'contacts', props.id); // replace 'authUserId' with the authenticated user's id
      await updateDoc(authUserDoc, {
        messages: arrayUnion(newMessage)
      });
    }
  }
  
  // rest of the component remains the same
}
export default ChatWindow;