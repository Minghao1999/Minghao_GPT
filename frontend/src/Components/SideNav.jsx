import React from "react"
import '../UI/SideNav.css'

const SideNav = ({historyMessages, onMessageSelect, isOpen, toggleSideNav})=>{
    return(
        <div className={`sidenav ${isOpen ? 'open' : 'closed'}`}>
            <button
                className={`toggle-btn inside`}
                onClick={toggleSideNav}
            >
                Close
            </button>
            {isOpen && (
                <>
                    <h3 className="history-text">History</h3>
                    <ul>
                        {historyMessages.map((msg, index) => (
                            <li key={index} onClick={() => onMessageSelect(index)}>
                                {msg.text.length > 20 ? `{msg.text.substring(0, 20)}...` : msg.text}
                            </li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    )
}

export default SideNav