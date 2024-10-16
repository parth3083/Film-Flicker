import HeroSection from "@/components/Landing Page/HeroSection";

import React from "react";

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
        <HeroSection />
      </div>
    </div>
  );
}

export default page;
