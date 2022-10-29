import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";
import downloading from "../../img/downloading.png";
import github from "../../img/github.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
          <div className="detail">
             <p>SkinStore is one of the first online store to offer dermatologist-created and recommanded products worldwide. SkinStore authorized retailer to 100s of premium beauty brands across skin</p>
             <p>Tech Stack:- HTML, CSS, JavaScript</p>
             <div className="inside">
              <div>
              <img src={downloading} alt="" />
              <a href="https://inquisitive-cascaron-6f30a0.netlify.app">visit</a>
              </div>
               <div>
                <img src={github} alt="" />
                  <a href="https://github.com/raobaba/Clone-SkinStore">GitHub</a>
               </div>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <div className="detail">
             <p>SkinStore is one of the first online store to offer dermatologist-created and recommanded products worldwide. SkinStore authorized retailer to 100s of premium beauty brands across skin</p>
             <p>Tech Stack:- HTML, CSS, JavaScript</p>
             <div className="inside">
              <div>
              <img src={downloading} alt="" />
              <a href="https://inquisitive-cascaron-6f30a0.netlify.app">visit</a>
              </div>
               <div>
                <img src={github} alt="" />
                  <a href="https://github.com/raobaba/Clone-SkinStore">GitHub</a>
               </div>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <div className="detail">
             <p>SkinStore is one of the first online store to offer dermatologist-created and recommanded products worldwide. SkinStore authorized retailer to 100s of premium beauty brands across skin</p>
             <p>Tech Stack:- HTML, CSS, JavaScript</p>
             <div className="inside">
              <div>
              <img src={downloading} alt="" />
              <a href="https://inquisitive-cascaron-6f30a0.netlify.app">visit</a>
              </div>
               <div>
                <img src={github} alt="" />
                  <a href="https://github.com/raobaba/Clone-SkinStore">GitHub</a>
               </div>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={'https://arpit-surana.vercel.app/Assets/Img/liciousdemo.gif'} alt="" />
          <div className="detail">
             <p>SkinStore is one of the first online store to offer dermatologist-created and recommanded products worldwide. SkinStore authorized retailer to 100s of premium beauty brands across skin</p>
             <p>Tech Stack:- HTML, CSS, JavaScript</p>
             <div className="inside">
              <div>
              <img src={downloading} alt="" />
              <a href="https://inquisitive-cascaron-6f30a0.netlify.app">visit</a>
              </div>
               <div>
                <img src={github} alt="" />
                  <a href="https://github.com/raobaba/Clone-SkinStore">GitHub</a>
               </div>
             </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
