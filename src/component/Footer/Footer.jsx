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
                    <img src={github} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;
