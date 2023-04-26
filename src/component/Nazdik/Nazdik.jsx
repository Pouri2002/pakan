import React from "react";
import "./nazdik.css";
import { FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";


const Nazdik = () => {
  return (
    <>
      <div className="nazdikContainer">
        <div className="nazdikTextPart">
          <p>نزدیک شما هستیم</p>
          <p>شعبه ها</p>
        </div>

        <div className="markazBox">
          <div className="markazBoxTextContainer">
            <div className="topMarkazText">
              <p>ولنجک</p>
              <p>...................</p>
              <p>مرکزی</p>
              <p>...................</p>
              <p>اپال</p>
            </div>
            <p id="addressMap">
              تهران ، خیابان سپهبد قرنی، جنب بیمارستان آپادانا، شماره ۱۳۹ و ۱۴۱
            </p>
            <pre id="phoneNumber">۰۲۱    ۸۸۳۴۳۷۶۶</pre>

            <div className="topMarkazIcon">

              <FaMapMarkerAlt/>
              <div id="iconLine"></div>
              <FaPhoneAlt/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nazdik;
