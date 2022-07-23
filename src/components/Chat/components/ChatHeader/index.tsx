import React from 'react';  
import ReactDOM from 'react-dom';  
import styles from 'header.module.css';  

function ChatHeader() {
    return (
      <div className="App">
            <header className="header.header">
                <img className="header.profile-image" src="../../assets/xaropinho.png" alt=""></img>
                <div className="header.column">
                    <h1 className="header.title">
                        Xaropinho BOT
                    </h1>
                    <div className="header.online">
                        <div className="header.online-icon"></div>
                        <h1 className="header.online-text">online</h1>
                    </div>
                </div>
            </header>
      </div>
    );
  }
  
  export default ChatHeader;
  