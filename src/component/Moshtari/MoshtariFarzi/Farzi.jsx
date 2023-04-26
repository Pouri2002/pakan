import React from "react";
import "./farzi.css";

const Farzi = ({ v }) => {
  return (
    <>
      <div className="farziContainer">
        <div className="leftFarzi">
          <p>{v.title}</p>
          <div className="imgLeft">
            <img src="/img/starGray.svg" alt="" />
            <img src="/img/starGray.svg" alt="" />
            <img src="/img/staryellow.svg" alt="" />
            <img src="/img/starYellow.svg" alt="" />
            <img src="/img/starYellow.svg" alt="" />
          </div>
          <p>{v.text}</p>
        </div>
        <div className="imgFarzi">
          <img src="img/navid.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Farzi;
