import SendIcon from '@mui/icons-material/Send';
import './chat-footer.css';  
import Message from '../ChatBody/components/message';
import { useAtom } from "jotai";
import { messagesAtom, newMessageAtom } from "../../../../atoms";
import chatService from "../../services/chatService"
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
  
  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(newMessage.length > 0) {
      resetInput()
      const responseMessage = await chatService.sendMessage({text: newMessage.trim()})
      console.log('responsemessage', responseMessage.data)
      setMessages([...messages, ...[buildSendedMessage(newMessage.trim()), responseMessage.data]])
    }
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
  