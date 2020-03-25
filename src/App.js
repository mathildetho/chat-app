import React from "react";
import Contact from "./components/Contact";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <Contact
        online
        avatar="https://randomuser.me/api/portraits/men/12.jpg"
        name="Craig Anderson"
      />
    </div>
  );
}

Contact.propTypes = {
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default App;
