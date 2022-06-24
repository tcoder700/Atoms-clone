import React from "react";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import purplearrow from "../images/arrow.png";

export default function Cards(){
    return(
        <div className="grid place-items-center py-24">
        <h1 className="text-eggplant font-DMSerifDisplay text-4xl font-normal">What makes Accel Atoms special</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x py-24">



{/*  /////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        
        <div className="md:px-11 mx-7 shadow-2xl rounded-xl py-12 md:py-1" id="card1-container">
             
            <div className="grid place-items-center" id="image-container">
                <img className="" src={card1} alt="card1" />
            </div> 

            <div className="px-4 pt-6 text-center" id="card-title">
                <h1 className="text-eggplant font-Inter text-2xl font-bold">1:1 mentoring</h1>
            </div> 



            <div className="text-center" id="card-content">
            <p className="text-eggplant font-Inter text-xl font-extralight py-4 tracking-wide">A dedicated Accel investment manager and our best operating members to help you move the needle</p>
            </div>

            <div className="grid place-items-center" id="arrow-container">
                <img className="" src={purplearrow} alt="arrow" />
            </div> 
                
        </div> 



{/*  /////////////////////////////////////////////////////////////////////////////////////////////////////// */}




        <div className="md:px-11 mx-7 shadow-2xl rounded-xl py-12 md:py-1" id="card2-container">
             
            <div className="grid place-items-center" id="image2-container">
                <img src={card2} alt="card2" />
            </div> 



            <div className="px-4 pt-6 text-center" id="card2-title">
                 <h1 className="text-eggplant font-Inter text-2xl font-bold">Non-dilutive capital</h1>
            </div> 



            <div className="text-center" id="card2-content">
            <p className="text-eggplant font-Inter text-xl font-extralight py-4 tracking-wide">We invest using uncapped convertible notes, and are happy to lead or boost your current round with our investment</p>
            </div>

            <div className="grid place-items-center" id="arrow2-container">
                <img className="" src={purplearrow} alt="arrow" />
            </div> 

        </div> 



{/*  /////////////////////////////////////////////////////////////////////////////////////////////////////// */}




        <div className="md:px-11 mx-7 shadow-2xl rounded-xl py-12 md:py-1" id="card3-container">
             
            <div className="grid place-items-center" id="image3-container">
                <img src={card3} alt="card3" />
            </div> 



            <div className="px-4 pt-6 text-center" id="card3-title">
                <h1 className="text-eggplant font-Inter text-2xl font-extrabold">The Accel Advantage</h1>
            </div> 



            <div className="text-center" id="card3-content">
            <p className="text-eggplant font-Inter text-xl font-extralight py-4 tracking-wide">We invest using uncapped convertible notes, and are happy to lead or boost your current round with our investment</p>
            </div>

            <div className="grid place-items-center pb-7" id="arrow3-container">
                <img className="" src={purplearrow} alt="arrow" />
            </div> 

        </div> 
        </div> 
        </div>
    )
}