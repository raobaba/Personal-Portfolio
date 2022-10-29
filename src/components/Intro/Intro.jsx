import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Rajan Kumar</span>
          <span>
          I am a Aspiring Full Stack Web Developer. An individual who can write clean and optimized code. Like building the frontend applications. Looking to enhance my skills as a Full Stack Web Developer
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/raobaba">
          <img src={Github} alt="" />
          </a>
          <a href="www.linkedin.com/in/kumar-rajan">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://twitter.com/RajanRao7061">
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">

        <img src={'https://avatars.githubusercontent.com/u/99542983?v=4'} alt="" width={400} mr={100} />


        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
