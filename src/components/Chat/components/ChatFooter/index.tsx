import SendIcon from '@mui/icons-material/Send';
import './chat-footer.css';  

function ChatFooter() {
    return (
      <div className="App">
        <div className="footer-chat">
          <input className="text-input" type="text" placeholder="Digite uma mensagem.." />
            <button className="send-button">
                <SendIcon/>
                <span className="enviar-texto">Enviar</span>
            </button>
        </div>
      </div>
    );
  }
  
  export default ChatFooter;
  