import React from "react";
import "./footer.css";
import { CiLocationOn } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer">
            <div className="bizimleqalin" id="f">
              <h3>Sosial Media</h3>
              <div className="sosial-footer">
                <li>
                  <a href="">
                    <AiOutlineMail id="icon-header" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@depo_greatwall_changan?is_from_webapp=1&sender_device=pc">
                    <FaTiktok id="icon-header" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/depo_greatwall_changan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <FiInstagram id="icon-header" />
                  </a>
                </li>
              </div>
            </div>

            <div className="info" id="f">
              <h3>Əlaqə</h3>
              {/* <div className="info-mail" id="info">
                <AiOutlineMail />
                <p style={{fontSize:"1.6rem"}}>GREATWALL_CHANGAN</p>
              </div> */}
              <div className="info-tel" >
                <div className="tel-1" id="info">  <FiPhoneCall />
                <p>055 350 00 88</p></div>
                <div className="tel-2" id="info" > <FiPhoneCall />
                <p style={{margin:0}}>077 592 32 32</p></div>
             
              </div>
              
              <div className="info-location" id="info">
                <CiLocationOn />
                <p>Baki</p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="copyright-logo">
              <h1>GREATWALL_CHANGAN</h1>
            </div>
            <div className="copyright-linkler">
              <a href="https://www.burxanhasanli.com/" target="_blank">www.burxanhasanli.com</a>
              <span>@copyright 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
