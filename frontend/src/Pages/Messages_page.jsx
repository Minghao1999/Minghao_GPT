import {useEffect, useState} from "react";
import {getMessages} from "../API/Chats_API.jsx";
import '../UI/Chat.css'

const Chat_page= ()=>{
    const [message, setMessage] = useState([])
    const [input, setInput] = useState('')

    const sendMessage = async () =>{

    }

    useEffect(() => {
        const getMessage = async () =>{
            try{
                const messagesData = await getMessages()
                setMessage(messagesData)
            }catch (error){
                console.error('Failed to get messages:', error)
            }
        }
        getMessage()
    }, []);

    return(
        <div className="chat-container">
            <div className="chat-message">
                {message.map((message, index)=>(
                <div key={index} className={`chat-message ${message.sender}`}>
                    {message.text}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Chat_page