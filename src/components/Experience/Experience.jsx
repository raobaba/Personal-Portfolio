import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Frontend Tools</div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills html" > <p>HTML</p> <p>90%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills css" > <p>CSS</p> <p>80%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills js" > <p>JavaScript</p> <p>65%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills react" > <p>React</p> <p>70%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills redux" > <p>Redux</p> <p>60%</p> </div>
        </div>

      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Backend Tools</div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills express" > <p>Express Js</p> <p>50%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills node" > <p>Node.Js</p> <p>60%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills mongo" > <p>MongoDB</p> <p>55%</p> </div>
        </div>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Other Tools</div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills micro" > <p>MicroSoft</p> <p>80%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills vs" > <p>VS code </p> <p>50%</p> </div>
        </div>
        <div className="container" style={{color: darkMode?'white':''}}>
          <div className="skills github" > <p>GIT / Github</p> <p>70%</p> </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
