import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, CredentialID, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" width='400px' height='200px' />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{CredentialID}</span>
      <button className="c-button">View</button>
    </div>
  );
};

export default Card;
