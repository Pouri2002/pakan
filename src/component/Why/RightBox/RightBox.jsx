import React from "react";
import "../RightBox/rightbox.css";
function RightBox({ v }) {
  return (
    <div className="rightBoxHandler">
      <div className="rightBoxContainer">
         <p id="rightBoxTex">{v.title}</p>  <img src={v.src} />
      </div>
    </div>
  );
}

export default RightBox;
