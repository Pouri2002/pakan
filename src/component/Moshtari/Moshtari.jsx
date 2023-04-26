import React from "react";
import "./moshtari.css";
import Farzi from "./MoshtariFarzi/Farzi";
import array from "./MoshtariFarzi/object";
import array2 from "./MoshtariFarzi/objectFarzi";
const Moshtari = () => {
  return (
    <>
      <div className="moshtariContainer">
        <div className="topContainer">
          <div className="moshtariTopText">
            <p>مشتریان ما چه میگویند</p>
            <p>نظرات مشتریان</p>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="arrow">
            <img src="/img/moshtariArrow.svg" alt="" />
          </div>
          <div className="moshtariBigContainer">
          {array.map((v) => (
            <Farzi v={v} />
          ))}
          </div>
           <div id="arrow">
             <img src="/img/moshtariArrow.svg" alt="" />
        </div>
        </div>
        <div className="line"></div>
      </div>
      
    </>
  );
};

export default Moshtari;
