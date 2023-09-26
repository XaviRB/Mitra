import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ contact, removeMatch, createChatRoom }) => {
  return (
    <div onClick={() => createChatRoom(contact.id)}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: "20px",
            marginBottom: "auto",
          }}
        >
          <Link to={`/chat/${contact.id}`}>
            {contact.name}
          </Link>
        </div>
        <button
          style={{ fontSize: "10px", margin: "10px" }}
          onClick={() => {
            removeMatch(contact.contactUserId);  // Changed from name.contactUserId to contact.contactUserId
          }}
        >
          Unmatch
        </button>
      </div>
    </div>
  );
};

export default SidebarItem;