import { useAtom } from "jotai";
import "./chat-body.css"
import Message from "./components/message";
import { messagesAtom } from "../../../../atoms";

function ChatBody() {
    const [messages, setMessages] = useAtom(messagesAtom);

    return (
        <div className="chat-body">
            {
                messages.map((message) => {
                    return <Message message={message}/>
                })
            }

        </div>
    );
  }
  
  export default ChatBody;
  