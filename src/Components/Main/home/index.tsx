import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function HomePageComponent() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-[2.2rem] lg:text-[3.3rem] w-[95%] tracking-wide text-white text-center mt-[3rem] lg:w-[600px]">
        CHANGE YOUR FUTURE 1 ACTION AT THE TIME!
      </h1>
      <div className="flex justify-center items-center flex-wrap animate-openMenu">
        <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
          <Image
            src={"/images/homePage/action.png "}
            alt="Action"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
          <Image
            src={"/images/homePage/friends.png "}
            alt="Friends"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
          <Image
            src={"/images/homePage/dugotopia.png"}
            alt="Dugotopia"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
          <Image
            src={"/images/homePage/kids.png"}
            alt="Kids"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/kids")}
          />
        </div>
        <div className=" hidden lg:flex w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
          <Image
            src={"/images/homePage/nft.png"}
            alt="Nft"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
