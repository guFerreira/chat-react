import SendIcon from '@mui/icons-material/Send';
import './chat-footer.css';  
import Message from '../ChatBody/components/message';
import { useAtom } from "jotai";
import { messagesAtom, newMessageAtom } from "../../../../atoms";

function ChatFooter() {
  const [messages, setMessages] = useAtom(messagesAtom)
  const [newMessage, setNewMessage] = useAtom(newMessageAtom)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)



  const buildSendedMessage = (text:string):Message => {
    return {
      text: newMessage,
      received:false,
      audio:'',
      image:''
    }
  }

  const resetInput = () =>{
    setNewMessage('')
  }
  
  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessages([...messages, buildSendedMessage(newMessage)])
    resetInput()
  }

    return (
      <div className="App">
        <form className="footer-chat" onSubmit={sendMessage}>
          <input 
            className="text-input"
            type="text" placeholder="Digite uma mensagem.."
            onChange={handleChange}
            value={newMessage}
          />
            <button className="send-button" type="submit">
                <SendIcon/>
                <span className="enviar-texto">Enviar</span>
            </button>
        </form>
      </div>
    );
  }
  
  export default ChatFooter;
  