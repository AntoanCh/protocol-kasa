import React from "react";

function Footer() {
  return <div className="footer">Ver: {process.env.REACT_APP_VERSION}</div>;
}

export default Footer;
