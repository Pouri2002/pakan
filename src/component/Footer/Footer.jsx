import React from "react";
import "./footer.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
       <div className="rightFooterContainer">

       <div className="footerLogo">
          <img id="footerLogo" src={"./img/pakanFooterLogo.svg"} />
        </div>
        <div className="textLeftFooterContainer">
        <div className="footerPakan">
          <p>پاکان </p>
          <p>درباره ما</p>
          <p>تماس با ما</p>
        </div>
        <div className="footerMoshtari">
          <p>امور مشتریان</p>
          <p>سوالات متداول</p>
          <p>ثبت شکایات</p>
        </div>
        <div className="footerEtelaat">
          <p>اطلاعات بیشتر</p>
          <p>قوانین و مقررات</p>
          <p>مجوز ها و گواهینامه ها</p>
        </div>
        <div className="footerFallow">
          <p>ما را دنبال کنید</p>
          <div className="footerFallowImg">
            <FaInstagramSquare />
            <FaFacebookSquare />
            <FaTwitter />
          </div>
        </div>
        </div>

       </div>
       <div className="footerLeftContainer">
       <div className="footerPoint">
          <img src={"./img/logoPart3.png"} />
          <img src={"./img/logoPart2.png"} />
          <img src={"./img/logoPart1.png"} />
        </div>
      </div>
       </div>
       

      <div className="lastPart">
        <p>
          تمامی حقوق مادی و معنوی برای خشکشویی پاکان محفوظ است. ساخته شده با عشق
          و صلح
        </p>
        <p>© 2020 | Designed & developed with peace and love in Tehran</p>
      </div>
    </>
  );
};

export default Footer;
