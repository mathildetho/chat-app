import React from 'react';
import './Contact.css';

function Contact(){
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/12.jpg"/>
            <div className="status">
                <h4 className="name">Craig Anderson</h4>
                <div className="status-online"></div>
                <p className="status-text">online</p>
            </div>
        </div>
    )
}

export default Contact;