import React, {useEffect, useRef, useState} from "react";
import {getMessages, postMessage} from "../API/Messages_API.jsx";
import '../Components/Message/styles/Messages.css'
import Message from "../Components/Message/Message.jsx";
import Loading from "../Components/Message/Loading.jsx";
import Landing from "../Components/Message/Landing.jsx";
import SideNav from "../Components/Message/SideNav.jsx";
import NavBar from "../Components/Common/NavBar.jsx";

const Message_page= ()=>{
    const [message, setMessage] = useState([])
    const [input, setInput] = useState('')
    const messageEndRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [historyMessages, setHistoryMessages] = useState([])
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const sendMessage = async (msg) =>{
        const userInput = msg || input.trim()
        if (userInput){
            const userMessage = {text: userInput, sender: 'user'}
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

    const handleSelectDateMessages = (date, messages) =>{
        setMessage(messages)
    }

    const toggleSideNav = () =>{
        setIsSideNavOpen(!isSideNavOpen)
    }

    const handleCardClick = (cardMessage) =>{
        sendMessage(cardMessage)
    }

    useEffect(() => {
        const getMessage = async () =>{
            setLoading(true)
            try{
                const messagesData = await getMessages()
                setHistoryMessages(messagesData)
            }catch (error){
                console.error('Failed to get messages:', error)
            }finally {
                setLoading(false)
            }
        }
        getMessage()
    }, []);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({behavior:'smooth'})
    }, [message]);

    return(
        <div className="chat-container">
            <NavBar active="message"/>
            <button
                className='toggle-btn outside'
                onClick={toggleSideNav}
            >
                Open
            </button>
            <SideNav
                historyMessages={historyMessages}
                onDateSelect={handleSelectDateMessages}
                isOpen={isSideNavOpen}
                toggleSideNav={toggleSideNav}
            />
            <div className={`chat-content ${isSideNavOpen ? 'sidenav-open' : ''}`}>
            {message.length > 0 ? (
                <>
                    <Message messages={message}/>
                    <div ref={messageEndRef}/>
                </>
            ):(
                <Landing onCardClick={handleCardClick}/>
            )}
            <div className={`chat-input-container ${isSideNavOpen ? 'sidenav-open' : ''}`}>
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
            </div>
        </div>
    )
}

export default Message_page