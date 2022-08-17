import { useAtom } from "jotai";
import "./chat-body.css"
import Message from "./components/message";
import { messagesAtom } from "../../../../atoms";
import { useEffect, useRef } from "react";

function ChatBody() {
	const [messages, setMessages] = useAtom(messagesAtom);
	const messagesEndRef = useRef<null | HTMLDivElement>(null)

	const scrollToBottom = () => {
			messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
		}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<div className="chat-body" >
			{
				messages.map((message) => {
						return <Message message={message}/>
				})
			}
		<div ref={messagesEndRef} />
		</div>
	);
}
  



export default ChatBody;
  