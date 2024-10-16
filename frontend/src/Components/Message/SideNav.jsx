import React from "react";
import './styles/SideNav.css';

const SideNav = ({ historyMessages, onDateSelect, isOpen, toggleSideNav }) => {

    const handleDateClick = (date) => {
        onDateSelect(date, historyMessages[date]);
    };

    return (
        <div className={`sidenav ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-btn inside" onClick={toggleSideNav}>
                Close
            </button>
            {isOpen && (
                <>
                    <h3 className="history-text">History</h3>
                    <ul>
                        {Object.keys(historyMessages).map((date) => (
                            <li key={date} onClick={() => handleDateClick(date)}>
                                {date}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SideNav;
