import React from "react";

const Section5 = () => {
  return (
    <section className="h-650 w-full  mt-40 px-15">
      {/* Text container */}
      <div className="h-50 w-full  flex justify-end">
        <div className="h-full w-1/2 e plus-jakarta-sans-300 text-white flex flex-col gap-3 items-center justify-center">
          <h1 className="text-6xl font-medium ">My most imapactful and</h1>
          <h1 className="text-6xl font-medium  pl-52">innovative works</h1>
        </div>
      </div>

      <div className="h-580 w-full  mt-20 relative">
        <div
          className="h-150 w-full border border-red-400 rounded-4xl relative z-10"
          style={{ backgroundColor: "#E4E4E4", color: "#1E1E1E" }}
        >
          <div className="h-20 w-full border mt-10 flex flex-row justify-between items-center px-20 plus-jakarta-sans-300">
            <div className="h-13 w-55 border-3 rounded-full flex justify-center items-center">
              <h1 className="text-xl font-semibold">BRANDING</h1>
            </div>
            <div className="h-13 w-55 border-3 rounded-full flex justify-center items-center">
              <h1 className="text-xl font-semibold">INTERMIDATED</h1>
            </div>
          </div>

          <div className="h-100 w-full border  plus-jakarta-sans px-23 flex items-center">
            <h1
              className="font-medium plus-jakarta-sans-300"
              style={{ fontSize: "300px" }}
            >
              PAPA
            </h1>
          </div>
        </div>

        <div
          className="h-150 w-full  rounded-4xl absolute top-86 z-20 "
          style={{ backgroundColor: "#E4E4E4", color: "#1E1E1E" }}
        >
          <div className="h-20 w-full border mt-10 flex flex-row justify-between items-center px-20 plus-jakarta-sans-300">
            <div className="h-13 w-55 border-3 rounded-full flex justify-center items-center">
              <h1 className="text-xl font-semibold">BRANDING</h1>
            </div>
            <div className="h-13 w-55 border-3 rounded-full flex justify-center items-center">
              <h1 className="text-xl font-semibold">INTERMIDATED</h1>
            </div>
          </div>

          <div className="h-100 w-full border  plus-jakarta-sans px-23 flex items-center">
            <h1
              className="font-medium plus-jakarta-sans-300 "
              style={{ fontSize: "300px" }}
            >
              COFFEE
            </h1>
          </div>
        </div>

        <div className="h-400 w-full border border-red-400 rounded-4xl absolute top-170 z-30 purple-background text-white">
          <div className="h-20 w-full border mt-10 flex flex-row justify-between items-center px-20 plus-jakarta-sans-300">
            <div className="h-13 w-55 border-3 rounded-full flex justify-center items-center">
              <h1 className="text-xl font-semibold">BRANDING</h1>
            </div>
            <div className="h-13 w-55 border-3 rounded-full flex justify-center items-center">
              <h1 className="text-xl font-semibold">INTERMIDATED</h1>
            </div>
          </div>

          <div className="h-100 w-full border  plus-jakarta-sans px-23 flex items-center">
            <h1
              className="font-medium plus-jakarta-sans-300 "
              style={{ fontSize: "300px" }}
            >
              DATA
            </h1>
          </div>

          <div className="h-150 w-full border mt-10 px-23 flex flex-row items-center gap-20">
            <div
              className="h-100 w-135 border border-yellow-500 rounded-4xl"
              style={{ backgroundColor: "#D9D9D9" }}
            ></div>

            <div className="h-100 w-135 border border-yellow-500 plus-jakarta-sans-300">
              <div className="h-60 w-full border pr-10">
                <h1 className="text-7xl font-medium">
                  Innovative Branding Solutions
                </h1>
              </div>

              <div className="w-full h-35 border mt-5 pr-10">
                <p className="text-xl">
                  Transforming brand identities through dynamic design and bold
                  concepts. This project highlights cutting-edge 3D visuals and
                  modern aesthetics that redefine how brands communicate.
                </p>
              </div>
            </div>
          </div>

          <div className="h-80 w-full border border-red-500 px-20 plus-jakarta-sans-300 flex flex-row gap-10">
            <div className="h-full w-135 border pr-10 ">
              <p className="text-xl pt-30">Explore a variety of projects across branding, 3D design, and interactive experiences, each crafted with precision and passion.</p>
              <div className="h-10 w-full flex flex-row items-center gap-15 border mt-10">
                <h1 className="text-xl font-bold">See More</h1>
                <img className="h-5 w-12 pt-1" src="src\assets\sideArrow.png
                " alt="" />
              </div>
            </div>

            <div className="h-full w-250 border flex justify-start pl-44   " >
              <div className="h-full w-130 border rounded-4xl" style={{ backgroundColor: "#D9D9D9" }}>

              </div>


            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Section5;
