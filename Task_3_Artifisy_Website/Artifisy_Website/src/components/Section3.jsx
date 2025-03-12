import React from "react";

const Section3 = () => {
  return (
    <section className="h-200 mt-35 w-full flex  flex-row px-20">
      <div
        className=" h-full w-3/6 rounded-[60px] flex items-end"
        style={{ backgroundColor: "#D9D9D9" }}
      >
        <div className="h-1/5 w-full border-t-2  border-white rounded-4xl flex flex-row plus-jakarta-sans-300 text-white pr-7 ">
          <div className="h-full w-4/5  rounded-4xl flex items-center pl-15 ">
            <p className="text-5xl font-bold  w-full">A GLIMPSE INTO MY CREATIVE WORLD</p>
          </div>

          <div className="h-full w-1/5  flex justify-center items-center  ">
          
          <div className="h-25 w-25 border-4 rounded-full flex items-center justify-center">

          <img className="h-2/4 w-2/4" src="\src\assets\arrow.svg" alt="" />

          </div>
          
          </div>
        </div>
      </div>

      {/* Container-2 */}

      <div className=" h-full w-3/6 text-white pt-10 pl-32 pr-10  plus-jakarta-sans-400 ">

      <div className="h-96 w-full  pr-25 ">
      <div className="h-35 w-full  ">
        <h1 className="text-6xl font-medium">Designs is not just what I do</h1>
      </div>

      <div className="h-50 w-full  mt-10 ">
        <p className="text-xl">Every project I take on is a reflection of my passion for creativity, a journey where colors, shapes, and ideas come together to tell a story. This portfolio represents more than work; it's a collection of moments where vision meets execution, bringing dreams to life with bold, vibrant energy.</p>
      </div>
      </div>
      

      <div className="h-22 w-full  mt-40 flex flex-row flex-wrap gap-3">

        <div className="text-sm border h-9 flex justify-center items-center w-32 rounded-2xl">CHILL</div>
        <div className="text-sm border h-9 flex justify-center items-center w-35 rounded-2xl">LO-FI LOVER</div>
        <div className="text-sm border h-9 flex justify-center items-center w-32 rounded-2xl">COFFEE</div>
        <div className="text-sm border h-9 flex justify-center items-center w-45 rounded-2xl">LOVE READING BOOK</div>
        <div className="text-sm border h-9 flex justify-center items-center w-40 rounded-2xl">AMERICAN BURGER</div>
        <div className="text-sm border h-9 flex justify-center items-center w-32 rounded-2xl purple-background" >MATCHA</div>
        
      </div>

      <div className="h-20 w-full  mt-11 flex items-end ">
        <h1 className="text-3xl font-bold">INSPIRED BY EVERYDAY</h1>

      </div>
      
      
      
      
      </div>
    </section>
  );
};

export default Section3;
