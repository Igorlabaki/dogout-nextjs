import Image from "next/image";
import React from "react";

interface PropsHeader {
  image: string;
}

export function HeaderComponent({ image }: PropsHeader) {
  return (
    <header className="w-full h-[50px] bg-black ">
      <div className="px-5 py-1 lg:w-[50%] m-auto flex justify-between items-center">
        <div className="h-[40px] w-[160px] relative">
          <Image
            src={image}
            alt="Logo Weguut"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="h-[40px] w-[40px] relative cursor-pointer">
          <Image
            src={"/images/Kids/Menu.png"}
            alt="Menu"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </header>
  );
}
