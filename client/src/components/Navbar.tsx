"use client";
import { useToast } from "@/hooks/use-toast";
import { useAuth, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
// import axios from "axios";

function Navbar() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { userId } = useAuth();

  const isAuthenticated = !!userId;
  const { toast } = useToast();
//   const userRegistration = async (user?: any) => {
//     const email = user?.emailAddresses[0]?.emailAddress || "";
//     const username = user?.username;
//     const clerkId = user?.id;
  
//     const firstName=user?.firstName
//     const lastName = user?.lastName
//     const phoneNumber = user?.phoneNumbers[0]?.phoneNumber || ""
//     const imageUrl = user?.imageUrl
 

//     const response = await axios.post("http://localhost:8000/register-user", {
//       email,
//       username,
//       clerkId,
//       firstName,
//       lastName,
//       phoneNumber,
//       imageUrl
//     });
//     if (response.status == 200) {
//       toast({
//         description: "Welcome to Avatarify",
//       });
//     }
//     if (response.status == 201) {
//       toast({
//         description: `Welcome back ${username}`,
//       });
//     }
//   };
  useEffect(() => {
 
    if (isAuthenticated) {
      try {
        // userRegistration(user);
      } catch (error) {
        console.log(error);
      }
    }
  }, [isAuthenticated, user]);
  return (
    <nav className="w-full text-white overflow-hidden font-ala fixed top-0 z-50 bg-transparent h-10 md:h-12 lg:h-20 flex items-center px-3 lg:px-40 justify-between ">
      <div className="left w-1/4">
        <Link
          href={"/"}
          className="text-xl font-ala cursor-pointer md:text-2xl lg:text-5xl text-red-600 font-semibold"
        >
         Film Flicker
        </Link>
      </div>

      <div className="right flex items-center gap-3 lg:gap-5 justify-between">
        {isLoaded ? (
          isSignedIn ? (
            <>
              
              <div className="flex items-center gap-3">
                <UserButton />
                {user?.username}
              </div>
            </>
          ) : (
            <>
              <Link
                href={"/sign-in"}
                className="px-2 py-1 rounded-md text-ala font-normal text-white text-xl cursor-pointer bg-red-600"
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className="px-2 py-1 rounded-md text-ala font-normal text-white text-xl cursor-pointer bg-red-600"
              >
                Sign Up
              </Link>
            </>
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
