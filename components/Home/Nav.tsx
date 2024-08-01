import Link from "next/link";
import React from "react";
import SearchBox from "../helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartBtn from "../helper/ShoppingCartBtn";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-sm">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-black font-bold text-[30px]">PharmaCure</h1>
        </Link>
        {/* icons */}
        <div className="flex items-center space-x-6">
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} />
          {/* sopping cart */}
          <ShoppingCartBtn />
          {/* if the user is signin */}
         <SignedIn>
          <UserButton />
         </SignedIn>
          <SignedOut>
            <SignInButton>
              {/* user btn */}
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
