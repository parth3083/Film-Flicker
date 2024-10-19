"use client";
import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

function HeroSection() {
  const { user } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress || "";
  const [movieName, setMovieName] = useState("");
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDFjZjY4N2Q2MTllMmE0NTU0ZDk5MWJlZWU1ZjAzYiIsIm5iZiI6MTcyOTE1NDg5Ni41ODE1NDksInN1YiI6IjY1ZWMwNDcxOGM0NGI5MDE3YzA3ZjIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.opnLrZFI1fkD3Ptepua8EKVlASs486Yua-q-o1ILnww"; 
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  const handleMovieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value);
  };

  const handleRecommendClick = async () => {
    try {
      
      const response = await axios.post("http://localhost:8000/api/get-recommendations", {
        movieName,
        email,
      });

      
      const moviesFromBackend = response.data.recommendedMovies; 
      setRecommendedMovies(moviesFromBackend); 

      } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <>
      <h1 className="text-white text-5xl font-extrabold mt-16 font-ala">
        What kind of movie do you want to watch?
      </h1>
      <div className="mt-5 flex items-center gap-10">
        <input
          onChange={handleMovieChange}
          type="text"
          placeholder="Enter movie name"
          className="pl-2 py-2 border-2 outline-none border-red-600 text-red-600 w-96 font-ala text-xl font-semibold h-12 rounded-md bg-transparent"
        />
        <button
          onClick={handleRecommendClick}
          className="py-2 px-4 font-ala text-2xl rounded-md border-2 border-red-600 text-red-600 transition-all ease-in-out duration-300 hover:bg-red-600 hover:text-white"
        >
          Recommend
        </button>
      </div>
      <div className="w-full h-[29vw] mt-3">
        <h1 className="text-white text-5xl font-extrabold pt-2 font-ala">
          Recommended Movies
        </h1>
        <div className="w-full h-96 card_container flex items-center justify-between">
          {recommendedMovies.length > 0 ? (
            recommendedMovies.map((movie, index) => (
              <div key={index} className="card w-[19.5%] h-full overflow-hidden rounded-md flex items-center flex-col">
                <div className="upper w-full h-[90%] border-2 border-red-600 bg-yellow-500">
                  
                  <img
                    src={`https://api.themoviedb.org/3/collection/${movie.id}/images`} // Use poster_path for image
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="upper w-full flex items-center justify-center font-ala overflow-clip text-white text-xl h-[10%]">
                  <h1>{movie.title}</h1> 
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No recommendations available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
