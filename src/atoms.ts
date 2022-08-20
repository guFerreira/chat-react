import {atom} from "jotai"
import Message from "./components/Chat/components/ChatBody/components/message"

export const newMessageAtom = atom<string>('')

export const messagesAtom = atom<Message[]>([])