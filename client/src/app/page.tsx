import HeroSection from "@/components/Landing Page/HeroSection";
import Loading from "@/components/Loading";
import MaxWidth from "@/components/MaxWidth";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import Link from "next/link";

function page() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/background.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen  main-bg"
    >
      <div className="transparent div mask-div bg-black w-full flex items-center justify-center flex-col text-white h-full bg-opacity-70">
        <h1 className="font-ala text-6xl font-extrabold w-[50%] ">Recommends Unlimited movies, TV shows and more</h1>
        
        <p className="font-ala text-xl mt-5 font-normal tracking-wider">Your next favorite is just a click away!</p>
        <p className="font-ala text-xl mt-10 font-normal tracking-wider">Excited to explore? Sign up with your email for tailored movie suggestions!</p>
        <Link href={'/sign-up'} className="py-2 px-4 font-ala text-2xl mt-5 rounded-md border-2 border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white flex items-center justify-center gap-2">
          Get Started
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}

export default page;
