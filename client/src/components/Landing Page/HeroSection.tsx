import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function HeroSection() {
  return (
    <>
      <h1 className="font-ala text-6xl font-extrabold w-[50%] ">
        Recommends Unlimited movies, TV shows and more
      </h1>

      <p className="font-ala text-xl mt-5 font-normal tracking-wider">
        Your next favorite is just a click away!
      </p>
      <p className="font-ala text-xl mt-10 font-normal tracking-wider">
        Excited to explore? Sign up with your email for tailored movie
        suggestions!
      </p>
      <Link
        href={"/sign-up"}
        className="py-2 px-4 font-ala text-2xl mt-5 rounded-md border-2 border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white flex items-center justify-center gap-2"
      >
        Get Started
        <IoIosArrowForward />
      </Link>
    </>
  );
}

export default HeroSection;
