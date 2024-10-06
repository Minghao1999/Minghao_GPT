import {useEffect, useRef, useState} from "react";
import {getMessages, postMessage} from "../API/Messages_API.jsx";
import '../UI/Messages.css'

const Message_page= ()=>{
    const [message, setMessage] = useState([])
    const [input, setInput] = useState('')
    const messageEndRef = useRef(null)

    const sendMessage = async () =>{
        if (input.trim()){
            const userMessage = {text: input, sender: 'user'}
            setMessage((prev)=>[...prev, userMessage])
            setInput('')

            const thinkingMessage = {text:'thinking...', sender: 'thinking'}
            setMessage((prev)=>[...prev, thinkingMessage])
            try{
                const botResponse = await postMessage(userMessage)
                setMessage((prev)=>{
                    const newMessages = prev.filter(msg => msg.sender !== 'thinking')
                    return [...newMessages, {text: botResponse.text, sender: 'bot'}]
                })
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

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({behavior:'smooth'})
    }, [message]);

    return(
        <div className="chat-container">
            <div className="chat-messages">
                {message.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
                <div ref={messageEndRef}/>
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