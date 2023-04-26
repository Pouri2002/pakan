import React from "react";
import "./mahdoode.css";
import { FaMapMarkerAlt } from "react-icons/fa";
function Mahdoode() {
  return (
    <>
      <div className="mahdoodeContainer">
        <div className="mahdoodeMap">
          <FaMapMarkerAlt />
          <p></p>
        </div>
        <div className="circleContainer">
          {" "}
          <div className="mahdoodeCircle">
            <div className="secondCircle">
              <div className="thirdCircle"></div>
            </div>
          </div>
        </div>
        <div className="mahdoodeButton">
          <p>برسی محدوده و درخواست سرویس</p>
        </div>
      </div>
    </>
  );
}

export default Mahdoode;
