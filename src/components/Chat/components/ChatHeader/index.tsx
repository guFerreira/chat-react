import React from 'react';  
import ReactDOM from 'react-dom';  
import styles from 'header.module.css';  

function ChatHeader() {
    return (
      <div className="App">
            <header className="header">
                <img className="profile-image" src="../../assets/xaropinho.png" alt=""></img>
                <div className="column">
                    <h1 className="title">
                        Xaropinho BOT
                    </h1>
                    <div className="online">
                        <div className="online-icon"></div>
                        <h1 className="online-text">online</h1>
                    </div>
                </div>
            </header>
      </div>
    );
  }
  
  export default ChatHeader;
  