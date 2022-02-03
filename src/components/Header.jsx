import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={()=>setDarkMode(!darkMode)}
                className="toggle-button"
            >
                Light / Dark 
            </button>
        </div>
    );
};

export default Header;
