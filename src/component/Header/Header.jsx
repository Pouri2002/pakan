import React from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar";
import Mahdoode from "../Mahdoode/Mahdoode";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <Navbar />
        <div className="headerTextContainer">
          <p>خونه تکونی همراه شماییم</p>
          <p>باز و نصب و شستن پرده ها باما</p>
        </div>
<div className="mahdoodeBox">
<Mahdoode/>
</div>
    

     
      </div>
    </>
  );
}

export default Header;
