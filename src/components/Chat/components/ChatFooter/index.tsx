import React from 'react';  
import ReactDOM from 'react-dom';  
import styles from './footer.module.css';  

function ChatFooter() {
    return (
      <div className="App">
        <div className="footer.footer-chat">
          <input className="footer.text-input" type="text" placeholder="Digite uma mensagem.." />
            <button className="footer.send-button">
                <i className="footer.material-icons" style={{fontSize:"20px"}}>send</i>
                <span className="footer.enviar-texto">Enviar</span>
            </button>
        </div>
      </div>
    );
  }
  
  export default ChatFooter;
  