import Image from "next/image";
import React from "react";
import CardComponent from "./card";

export function MainComponent() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <div className="h-[300px] w-[350px]  lg:h-[350px] md:w-[600px] relative cursor-pointer md:mt-5 lg:mt-10">
        <Image
          src="/images/Kids/LogoKids.png"
          alt="Logo Weguut"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] mb-6 text-blue-pattern lg:mt-10">Stories</h1>
        <div className="flex justify-center items-center gap-3 lg:gap-4">
          <CardComponent
            image="/images/Kids/panel1.png"
            alt="Painel 1"
            href="#"
          />
          <CardComponent
            image="/images/Kids/panel2.png"
            alt="Painel 2"
            href="#"
          />
        </div>
      </div>
    </main>
  );
}
