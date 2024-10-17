import React from "react";

function HeroSection() {
  return (
    <>
      <h1 className="text-white text-5xl font-extrabold mt-16 font-ala ">
        What kind of movie you want to watch ?{" "}
      </h1>
      <div className="  mt-5 flex items-center  gap-10">
        <input
          type="text"
          placeholder="Enter movie name"
          className="pl-2 py-2 border-2 outline-none border-red-600 text-red-600 w-96 font-ala text-xl font-semibold h-12 rounded-md bg-transparent"
        />
        <button className="py-2 px-4 font-ala text-2xl  rounded-md border-2 border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white ">
          Recommend
        </button>
      </div>
{/* This is div */}
      <div className="w-full h-[29vw] mt-3 ">
        <h1 className="text-white text-5xl font-extrabold pt-2 font-ala ">
          Recommended Movies{" "}
        </h1>
        <div className="w-full h-96  card_container flex items-center justify-between">
          <div className="card w-[19.5%] h-full overflow-hidden  rounded-md flex items-center flex-col ">
            <div className="upper w-full h-[90%] border-2 border-red-600 bg-yellow-500"></div>
            <div className="upper w-full flex items-center justify-center font-ala overflow-clip text-white text-xl h-[10%] ">
              <h1>Superman Returns</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
