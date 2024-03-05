import React from "react";
import "./Footer.css"
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import Logo from "../../assets/logo.png"

const Footer = () =>{
    return(
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-media">
                    <a href="https://github.com/Barath97"><img src={github} alt="" /></a>
                    <a href="https://www.instagram.com/barath__23/"><img src={instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/barath-k23/"><img src={linkedin} alt="" /></a>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;
