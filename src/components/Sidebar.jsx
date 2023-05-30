import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, onSnapshot, doc, updateDoc, arrayRemove, getDoc, arrayUnion, getDocs, query } from 'firebase/firestore';

function Sidebar() {
  const [contacts, setContacts] = useState([]);
  const [showPotentialMatches, setShowPotentialMatches] = useState(false);
  const [potentialMatches, setPotentialMatches] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    // replace 'authUserId' with the authenticated user's id
    const authUserDocRef = doc(db, 'users', 'authUserId');
    const authUserDoc = await getDoc(authUserDocRef);
    
    if (authUserDoc.exists()) {
      const contactIds = authUserDoc.data().contacts;
      const contactDocs = await Promise.all(contactIds.map(id => getDoc(doc(db, 'users', id))));
      setContacts(contactDocs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
  }

  const fetchPotentialMatches = async () => {
    const authUserDocRef = doc(db, 'users', 'authUserId');
    const authUserDoc = await getDoc(authUserDocRef);
    if (authUserDoc.exists()) {
      const contactIds = authUserDoc.data().contacts;
      const q = query(collection(db, 'users'));
      const snapshot = await getDocs(q);
      let users = [];
      snapshot.forEach((doc) => {
        if (doc.id !== 'authUserId' && !contactIds.includes(doc.id)) {
          users.push({ id: doc.id, ...doc.data() });
        }
      });
      setPotentialMatches(users);
    }
  }

  const removeMatch = async (userId) => {
    // update the auth user's contacts
    const authUserDoc = doc(db, 'users', 'authUserId'); // replace 'authUserId' with the authenticated user's id
    await updateDoc(authUserDoc, {
      contacts: arrayRemove(userId)
    });

    // update the other user's contacts
    const otherUserDoc = doc(db, 'users', userId);
    await updateDoc(otherUserDoc, {
      contacts: arrayRemove('authUserId') // replace 'authUserId' with the authenticated user's id
    });
    
    // fetch the updated contacts
    fetchContacts();
  }

  const addUser = async (userId) => {
    const authUserDocRef = doc(db, 'users', 'authUserId');
    const otherUserDocRef = doc(db, 'users', userId);

    // Update the auth user's contacts
    await updateDoc(authUserDocRef, {
        contacts: arrayUnion(userId)
    });

    // Update the other user's contacts
    await updateDoc(otherUserDocRef, {
        contacts: arrayUnion('authUserId') // replace 'authUserId' with the authenticated user's id
    });

    // Fetch the updated contacts
    fetchContacts();

    setShowPotentialMatches(false);
  };

  const toggleShowPotentialMatches = () => {
    setShowPotentialMatches(!showPotentialMatches);
    if (!showPotentialMatches) {
      fetchPotentialMatches();
    }
  };

  return (
    <div className="main-mentors">
      <div className="mentor-header">
        <h4>Your Mentors</h4>
      </div>
      <div className="mentor-list">
        {contacts.map(contact => (
          <div className="mentor-name" key={contact.id}>
            <h5>{contact.name}</h5>
            <div className="mentor-button">
              <button 
                className="btn-green"
                onClick={() => removeMatch(contact.id)}
              >
                Unmatch
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={toggleShowPotentialMatches}>
        {showPotentialMatches ? 'Close' : 'Add User'}
      </button>
      {showPotentialMatches && (
        <div className="dropdown-menu">
          {potentialMatches.map(user => (
            <div key={user.id} onClick={() => addUser(user.id)}>
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default Sidebar;