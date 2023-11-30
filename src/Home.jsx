import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';

function Home() {
    const [isChatVisible, setChatVisible] = useState(false);
    const [activeChatId, setActiveChatId] = useState(null);
  
    const handleChatOpen = (contactId) => {
      console.log('Opening chat for contact ID:', contactId);
      setActiveChatId(contactId); // Set the active chat ID
      setChatVisible(true); // Show the chat component
    };
  
    return (
      <>
        <Navbar />
        <div className="main">
          <Sidebar onChatOpen={handleChatOpen} />
          <div className="main-content">
            {isChatVisible ? (
              <Chat activeChatId={activeChatId} />
            ) : (
              // Otherwise, render the default main content
              <>
                <h2>Welcome to Mitra - Advice, Support, Development Website</h2>
                <h4>Created by a research team at Western Washington University</h4>
                <div className="main-box">
                <div className="main-item">
                    <h3>Our Mission:</h3>
                    <p>
                    Through ASD, we hope to provide a friendly inviting platform with
                    the purpose of linking people with Autism through a mentor to
                    mentee relationship to promote some of the strengths of Autism.
                    Our website is based off previous studies and research papers, as
                    we want you to know this website is a research project with
                    real-life impacts we hope to create. Feel free to contact us via:
                    fakeEmail@gmail.com to give us your comments/suggestions on
                    improvements we can make.
                    </p>
                    <div className="main-button">
                    <a href="#" className="btn-green">
                        Contact Us
                    </a>
                    </div>
                </div>
                <div className="main-item">
                    <h3>Website Functionality:</h3>
                    <p>
                    To use this website for it's intended purpose, we need you to
                    first create a simple account consisting of some basic information
                    such as name, email, hobbies/interests, and if you would like to
                    be a mentor or mentee. After setting up an account, you are
                    allowed to connect with other users of the website and communicate
                    with them through our chatting mechanism. We ask you to keep
                    conversations civil when communicating with other users.
                    </p>
                    <div className="main-button">
                    <a href="#" className="btn-green">
                        Contact Us
                    </a>
                    </div>
                </div>
                </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;