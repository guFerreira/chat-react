import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import ChatHeader from "./components/ChatHeader";
import "./main.css"
import "./animation.css"
import { useEffect } from "react";
import chatService from "./services/chatService";

import { messagesAtom } from "../../atoms";
import { useAtom } from "jotai";
import Message from "./components/ChatBody/components/message";

function Chat() {
	const [messages, setMessages] = useAtom(messagesAtom);

  const getMessages = async () => {
    try {
      const response = await chatService.getMessages()
      return response
    } catch (error) {
      console.error(error);
      setMessages([])
    }
  }

  const loadMessages = async () => {
    const currentMessages = await getMessages()
    setMessages([...messages, ...currentMessages])
  }

  useEffect(() => {
    console.log('update')
    loadMessages()
  },[]);

  return (
    <div className="body">
      <div className="background-animation">
        <div className="chatbot-container">
          <div className="chatbot-box chat-animation">
            <ChatHeader></ChatHeader>
            <ChatBody></ChatBody>
            <ChatFooter></ChatFooter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
