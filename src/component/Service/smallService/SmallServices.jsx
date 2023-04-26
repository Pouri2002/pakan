import React from "react";
import './smallservices.css'
function SmallServices({v}){

    return(

        <>
        <div className="smallContainer">

            <img src={v.src}/>
            <p>{v.title}</p>
        </div>
        </>
    )
}

export default SmallServices;