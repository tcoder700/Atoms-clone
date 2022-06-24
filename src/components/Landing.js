import React from "react";
import SideImage from '../images/landing_sec.png';

export default function Landing() {
    return(
        <div>
      
    <div className="grid grid-cols-1 md:grid-cols-2 divide-x w-full flex">
{/*<img src={LandingImage} className="hidden md:block  left-0 top-0 right-auto bottom-auto w-3/5" alt="hero" />*/}
<div className="sm:bg-Hero-Landing sm:grid sm:place-content-center sm:w-full overflow-hidden px-7 py-12 tracking-wide">
<h1 className="font-DMSerifDisplay text-5xl text-eggplant font-normal sm:py-4 sm:px-11 ">It’s time to change pre-seed </h1>
<h1 className="font-DMSerifDisplay text-5xl text-eggplant font-normal sm:py-4 sm:px-11 ">investing in India</h1>
<p className="font-Inter text-2xl text-eggplant font-light py-11">If you are an early stage founder in India, come partner with us and <br />be a part of the Accel family. Raise $250K in non-dilutive capital and <br />get 1:1 mentoring from the best operators in the industry</p>
<button className="font-Inter text-2xl text-white bg-eggplant hover:bg-purple font-extralight py-2 px-11 md:px-7 md:mx-32">Apply</button>
</div>
    <div className="mx-7">
        <img className="float-right sm:w-full md:w-fit mt-12 md:mt-28 rounded-xl" src={SideImage} alt="landing2" />
    </div>
</div>
        </div>
    )
}