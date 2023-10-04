import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <div className="footerTop">
        <div className="footerTopRight">
          <h3>Contactanos</h3>
          <p>ladyfitlovers@gmail.com</p>
        </div>
        <div className="footerTopLeft">
          {/* <Link to="/https://www.instagram.com/ladyfitlovers/">
            <img src={logo} />
          </Link> */}
        </div>
      </div>
      <div className="footerBottom">
        ©2023 Todos los derechos reservados - Grupo de desarrollo Web
      </div>
    </div>
  );
};

export default Footer;
