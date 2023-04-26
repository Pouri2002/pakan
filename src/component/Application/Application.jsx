import React from "react";
import "./application.css";

const Application = () => {
  return (
    <>
      <div className="appContainer">
        <div className="appRightContainer">
      
          <div className="imageApp">
          <img src="/img/appRight.png" alt="" />
          </div>
        </div>
        <div className="appLeftContainer">
        <div className="appLeftSizeHandler">
          <div className="firstAppText">
            <div className="TopLeft">
              <p>خشکشویی در جیب شما</p>
              <p>اپلیکیشن پاکان</p>
            </div>
            <div className="TopRight">
              <img src="/img/appLeftTop.svg" alt="" />
            </div>
          </div>
          <div className="secondAppText">
          <img id="responsiveAppImg" src="/img/appRight.png" alt="" />

            <p>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
               در ستون و سطرآنچنان که لازم است و برای شرایط
            </p>
          </div>
          <div className="thirdAppText">
            <div className="social">
              <img src="/img/android.svg" alt="" />
              <p>دانلود مستقیم</p>
            </div>
            <div className="social">
              <img src="/img/googleplay.svg" alt="" />
              <p>GooglePlay</p>
            </div>
            <div className="social">
              <img src="/img/android.svg" alt="" />

              <p>وب اپلیکیشن</p>
            </div>
            <div className="social">
              <img src="/img/apple.svg" alt="" />
              <p>iOS نسخه</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Application;
