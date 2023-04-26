import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      {/* top avbar */}

      <div className="topNavbar">
        <div className="daysNav">
          <p>روز های کاری ۸:۳۰ تا ۱۸:۰۰ </p>
        </div>
        <div className="fridayNav">
          <p>جمعه ها ۹:۰۰ تا ۱۷:۰۰ </p>
          <img src={"/img/navClock.png"} />
        </div>

        <div className="phoneNumNav">
          <p>۰۲۱-۴۱۷۷۴</p>
          <img src={"/img/numberNav.png"} alt="" />
        </div>
      </div>

      {/* bottom nav */}

      <div className="bottomNavbar">
        <div className="leftBNav">
          <p className="signUp">ثبت نام</p>
          <p className="logedIn">ورود</p>
        </div>
        <div className="rightBNav">
          <p> بلاگ</p>
          <p>ویترین</p>
          <p> تماس باما</p>
          <p>نحوه درخواست</p>
          <p>خدمات سازمانی</p>
          <p>خدمات</p>
          <p>درباره ما</p>
          <img src={"img/navLogo.svg"} alt="" />
        </div>

        <div className="rightNavMobile">
        <img src="img/navLogo.svg" alt="" />
        <img className="hamburger" src="img/hamburger.svg" alt="" />

        </div>
      </div>
    </>
  );
}

export default Navbar;
