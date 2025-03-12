import React from "react";

const Section1 = () => {
  return (
    <section className="h-200 mt-10 w-full    plus-jakarta-sans-200 flex flex-col justify-center items-center relative gap-7  ">
      <h1
        className="text-white  font-bold  h-64 w-full flex justify-center items-center relative z-10 "
        style={{ fontSize: "300px" }}
      >
        CREATIVE{" "}
      </h1>
      <h1
        className="text-white  font-bold h-64 w-full flex justify-center items-center relative z-10 "
        style={{ fontSize: "300px" }}
      >
        WORLD
      </h1>

      <div className="h-123 z-20  w-75 absolute left-88 bottom-0 rotate-13 " style={{boxShadow:' -15px 0px 50px black'}}>
        <div className="h-3/5 w-full purple-background"></div>
        <div
          className="h-2/5 w-full flex flex-col justify-center items-center p-5 gap-2  "
          style={{ backgroundColor: "#E4E4E4" }}
        >
          <div className="h-full w-full  flex flex-col gap-5">
            <h1
              className=" text-3xl   font-bold "
              style={{ color: "#1E1E1E" }}
            >
              LIVING COLOR
            </h1>

            <p className="text-base plus-jakarta-sans-400  pl-1 ">
              Consectetur nostra dapibus eu eleifend ipsum iaculis luctus dis ac
              turpis sociosqu risus integer pellentesque
            </p>
          </div>
        </div>
      </div>
      <div className="h-123 z-20 w-75 absolute right-89.5  -rotate-19 " style={{boxShadow:' -15px 0px 50px black'}}>
        <div className="h-3/5 w-full purple-background"></div>
        <div className="h-2/5 w-full " style={{ backgroundColor: "#E4E4E4" }}>
          <div
            className="h-2/5 w-full flex flex-col justify-center items-center p-5 gap-2  "
            style={{ backgroundColor: "#E4E4E4" }}
          >
            <div className="h-full w-full  flex flex-col gap-5">
              <h1
                className=" text-3xl   font-bold "
                style={{ color: "#1E1E1E" }}
              >
                INSPIRED
              </h1>

              <p className="text-base plus-jakarta-sans-400 pl-1">
                Consectetur nostra dapibus eu eleifend ipsum iaculis luctus dis
                ac turpis sociosqu risus integer pellentesque
              </p>
            </div>
          </div>
        </div>
      </div >

      
    </section>    
  );
};

export default Section1;
