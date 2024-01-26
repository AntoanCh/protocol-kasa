import React from "react";
import dayjs from "dayjs";

function Footer() {
  return <div className="footer">Ver: {process.env.REACT_APP_VERSION}</div>;
}

export default Footer;
