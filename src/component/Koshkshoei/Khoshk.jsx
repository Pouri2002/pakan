import React from "react";
import "./khoshk.css";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Khoshk = () => {
  return (
    <>
      <div className="khoshkContainer">
        <div className="textTopKhoshk">
          <p>فراتر از یک خشکشویی</p>
          <p>ویترین</p>
        </div>
        <div className="bottomKhoshk"></div>

        <div className="khoshkBoxContainer">
          <div className="leftKhoshk">
            <p id="khoshkLorem">لورم ایپسوم متن ساختگی</p>
            <p className="boxtextkhoshk">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className="khoshkMedia">
              <p> به اشتراک بگذارید</p>
              <div className="khoshkShoeeivonBox">
                <FaInstagram />
                <FaTwitter />
                <FaFacebookSquare />
              </div>
            </div>
          </div>
          <div className="rightKhoshk">
            <img src="img/boxKhoshk.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Khoshk;
