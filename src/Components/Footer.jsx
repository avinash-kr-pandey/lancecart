import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";





function Footer() {
  return (
    <div className="footer">
        <div className="sb__footer section__padding">
             <div className="sb__footer-links">
              <div className="sb__footer-links_div">
              <h4>Services</h4>
              <a href="/store">
                <p>Store Locator</p>
              </a>
              <a href="/frame">
                <p>Frame Size</p>
              </a>
              <a href="/buying">
                <p>Buying Guide</p>
              </a>
              </div>
              <div className="sb__footer-links_div">
              <h4>About Us</h4>
              <a href="/we">
                <p>We Are Hriring</p>
              </a>
              <a href="/refer">
                <p>Refer and Earn</p>
              </a>
              <a href="/about">
                <p>About Us</p>
              </a>
              <a href="/couples">
                <p>Couples</p>
              </a>
              </div>
              <div className="sb__footer-links_div">
              <h4>Help</h4>
              <a href="/faqs">
                <p>FAQS</p>
              </a>
              <a href="/guide">
                <p>Guide</p>
              </a>
              </div>
              <div className="sb__footer-links_div">
                <h4>comimg soon on</h4>
                <div className="socialmedia">
                <a href="/"><FaFacebookF /></a>
                <a href="/"><FaInstagram /></a>
                <a href="/"><FaTwitterSquare /></a>
                <a href="/"><FaRocketchat /></a>
                </div>
              </div>
             </div>
             <hr></hr>
             <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All Right resiverd
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Condition</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>

                </div>
             </div>
        </div>
      
    </div>
  );
}

export default Footer;
