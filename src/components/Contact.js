import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  const online = props.online;
  return (
    <div className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar" />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"} />
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Contact;
