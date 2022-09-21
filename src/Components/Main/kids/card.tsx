import Image from "next/image";
import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<string> {
  image: string;
  alt: string;
  href: string;
}

export default function CardComponent({ image, alt, href }: Props) {
  return (
    <div className="flex justify-center items-center px-2 py-2  bg-purple-pattern rounded-lg relative cursor-pointer">
      <img
        src={image}
        alt=""
        className="h-[250px] w-[150px] md:h-[350px] md:w-[200px]"
      />
    </div>
  );
}
