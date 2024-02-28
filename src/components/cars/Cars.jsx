import React, { useEffect } from "react";
import cars from "./cars.json";
import "./cars.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Cars = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });

    
  }, []);

  
  return (
    <>
      <div className="cars">
        <h1 data-aos="fade" data-aos-delay="700">Avtomobillər</h1>
        <div className="cars-in">
          {cars.avtochina.map((item,index) => (
            <div className="cardiv"     data-aos="fade" data-aos-delay={`${700 + index * 100}`}  key={item.id}>
              <div className="divimg" > <img src={item.blogimg} alt="" /></div>
             
              <h3>{item.marka}</h3>
              <h2>{item.Model}</h2>
            
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
