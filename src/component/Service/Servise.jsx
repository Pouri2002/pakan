import React from "react";
import "./service.css";
import ServicesDasa from "./object/data";
import SmallServices from "./smallService/SmallServices";
function Service() {
  return (
    <>
      <div className="serviceTopTextContainer">
        <p>سرویس مورد نظر خود را انتخاب کنید</p>
        <p>سرویس های پاکان</p>
      </div>

      <div className="servicesBigContainer">
        <div className="leftBig">
          <div className="leftBigContainer">
            <img src="/img/serviceLeftt.jpg" alt="" />
            <p>نام سرویس مثال</p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف،
            </p>
          </div>
        </div>
        <div className="rightBig">
          <div className="itembox">
            {ServicesDasa.map((v, i) => {
              return <SmallServices v={v} index={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
