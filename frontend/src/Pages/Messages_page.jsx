import {useEffect, useState} from "react";
import {getMessages, postMessage} from "../API/Messages_API.jsx";
import '../UI/Messages.css'

const Message_page= ()=>{
    const [message, setMessage] = useState([])
    const [input, setInput] = useState('')

    const sendMessage = async () =>{
        if (input.trim()){
            const userMessage = {text: input, sender: 'user'}
            setMessage((prev)=>[...prev, userMessage])
            setInput('')
            try{
                const botResponse = await postMessage(userMessage)
                setMessage((prev)=>[...prev, {text: botResponse.reply, sender: 'bot'}])
            }catch (error){
                console.error('Error sending message:',error)
            }
        }
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
                {message.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Message_page