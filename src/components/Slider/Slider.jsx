import React, { useEffect } from "react";
import Sliderr from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgslider1 from './car3.jpg'
import imgslider2 from './car6.jpeg'
import imgslider3 from './car3.png'
import imgslider4 from './car5.png'
import './slider.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Slider = () => {
  const settings = {
    
    infinite: true,
    speed: 1000, // Otomatik geçiş hızı (1 saniyede bir)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Otomatik dönüşü etkinleştir
    autoplaySpeed: 3000, // Otomatik dönüş hızı (3 saniyede bir)
    pauseOnHover: false,
    fade: true,
  };
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);


  return (
    <div  className="slider" data-aos="fade" data-aos-delay="300">
      
      <Sliderr {...settings}>
       <img src={imgslider1} alt="" />
       <img src={imgslider2} alt="" />
      
       <img src={imgslider4} alt="" />
      </Sliderr>
  
    </div>
  );
};

export default Slider;