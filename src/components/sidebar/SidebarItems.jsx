import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ name, removeMatch }) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: "20px",
            marginBottom: "auto",
          }}
        >
          <Link
            to={
              (window.location.href.indexOf("messages") > -1
                ? "../messages?name="
                : "./messages?name=") + name + "&id=" + name.contactUserId
            }
          >
            {name}
          </Link>
        </div>
        <button
          style={{ fontSize: "10px", margin: "10px" }}
          onClick={() => {
            removeMatch(name.contactUserId);
          }}
        >
          Unmatch
        </button>
      </div>
    );
  };

export default SidebarItem;