import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import ChatHeader from "./components/ChatHeader";

function Chat() {
  return (
    <div className="container">
      <ChatHeader></ChatHeader>
      <ChatBody></ChatBody>
      <ChatFooter></ChatFooter>
    </div>
  );
}

export default Chat;
