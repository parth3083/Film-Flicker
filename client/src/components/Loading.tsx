"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

function Loading() {
  const { isLoaded } = useAuth();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    if (!isLoaded) {
      interval = window.setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 100);
    }

    if (isLoaded) {
      setCounter(100);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoaded]);

  return (
    <div className="w-full overflow-hidden relative h-screen bg-slate-900 text-white flex-col flex items-center justify-center">
      <h1 className="lg:text-9xl md:text-9xl text-7xl capitalize font-ala font-semibold">
        Film Flicker
      </h1>
      <p className="font-ala font-medium md:text-4xl text-2xl lg:text-4xl capitalize text-zinc-500">
        A movie recommnedation system
      </p>

      <h1 className="font-ala font-semibold md:text-8xl  text-5xl lg:text-8xl absolute bottom-5 left-5 md:left-10 lg:left-10">
        {counter}%
      </h1>
    </div>
  );
}

export default Loading;
