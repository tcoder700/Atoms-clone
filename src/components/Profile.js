import React from "react";
import person1 from "../images/Profile1.jpeg";
import person2 from "../images/Profile2.jpeg";
import person3 from "../images/Profile3.jpeg";
import person4 from "../images/Profile4.jpeg";
import person5 from "../images/Profile5.jpeg";
import person6 from "../images/Profile6.jpeg";
import person7 from "../images/Profile7.jpeg";
import person8 from "../images/Profile8.jpeg";

export default function Profile(){
    return(
    <div className="grid place-items-center pt-30 pb-20 ">
    <h1 className="text-eggplant font-DMSerifDisplay font-bold text-4xl mx-8 sm:mx-1">Access 1:1 advice from our pool of 50+ mentors</h1>


    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-5">
    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={person1} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-Inter">Mohit Garg</div>
        <p className="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      
    </div>

    
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={person2} alt="River" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 font-Inter">Suman Gopalan</div>
        <p class="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      
    </div>

    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={person3} alt="Forest" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-Inter">Naman Gupta</div>
        <p className="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    
    </div>

    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={person4} alt="Forest" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-Inter">Priya Rajan</div>
        <p className="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      
    </div>


    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={person5} alt="Forest" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-Inter">Rashie Jain</div>
        <p className="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
   
    </div>



    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={person6} alt="Forest" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-Inter">Nachiketas Ramanujan</div>
        <p className="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
  
    </div>



    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={person7} alt="Forest" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-Inter">Puneet Kumar</div>
        <p className="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
     
    </div>



    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={person8} alt="Forest" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-Inter">Shruti Ghatge</div>
        <p className="text-gray-700 text-base font-Inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>


  </div>
</div>

    )
}