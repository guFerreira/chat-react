import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import ChatHeader from "./components/ChatHeader";
import "./main.css"
import "./animation.css"

function Chat() {
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
