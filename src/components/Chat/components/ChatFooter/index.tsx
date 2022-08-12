import SendIcon from '@mui/icons-material/Send';
import './chat-footer.css';  
import Message from '../ChatBody/components/message';
import { useAtom } from "jotai";
import { messagesAtom } from "../../../../atoms";

function ChatFooter() {
  const [messages, setMessages] = useAtom(messagesAtom);

  function sendMessage() {
    
  }

    return (
      <div className="App">
        <div className="footer-chat">
          <input className="text-input" type="text" placeholder="Digite uma mensagem.." />
            <button className="send-button" onClick={sendMessage}>
                <SendIcon/>
                <span className="enviar-texto">Enviar</span>
            </button>
        </div>
      </div>
    );
  }
  
  export default ChatFooter;
  