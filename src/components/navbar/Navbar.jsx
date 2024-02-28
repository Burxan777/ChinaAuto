import React, { useEffect } from 'react'
import './navbar.css'
import logo from '../../img/logo.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
    <div className="navbar">
        <div className="navbar-in">
            <div className="navbar-left" data-aos="fade" data-aos-delay="300">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-right">
              <div className="right-top">
              <div data-aos="fade" data-aos-delay="300" className="instagram"><a href="https://www.instagram.com/depo_greatwall_changan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className='instagramicon'/>Instagram</a></div>
                <div data-aos="fade" data-aos-delay="500" className="tiktok"><a href="https://www.tiktok.com/@depo_greatwall_changan?is_from_webapp=1&sender_device=pc"><FaTiktok className='tiktokicon'/>TikTok</a></div>
                <div data-aos="fade" data-aos-delay="700" className="elaqe"><a href=""><FiPhoneCall className='callicon'/>055 350 00 88</a></div>
              </div>
              <div data-aos="fade" data-aos-delay="500" className="right-bottom">
                <h1>Çin avtomobillərinin <span>keyfiyyətli</span> və <span>orginal</span> ehtiyyat hissələri</h1>
              </div>
              
            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Navbar