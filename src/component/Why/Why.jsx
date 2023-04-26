import React from "react";
import "./why.css";
import RightBox from "./RightBox/RightBox";
import data from "./data";
function Why() {
  return (
    <>
      <div className="whyContainer">
        <div className="whyTopText">
          <p>چرا پاکان ؟</p>
          <p>ویژگی های پاکان</p>
        </div>
        <div className="whyBibContainer">
          <div className="bigRight">
            {data.map((v) => (
              <RightBox v={v} />
            ))}
          </div>
          <div className="bigLeft">
            <p>ویژگی متمایز شماره یک پاکان</p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته،
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;
