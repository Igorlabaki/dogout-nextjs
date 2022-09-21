import React, { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  href: string;
  hiddenMobile?: boolean;
}

export function IconComponent({ icon, href, hiddenMobile }: IconProps) {
  return (
    <a
      className={`${hiddenMobile ? "hidden md:flex" : "flex"}
      h-[50px] w-[50px] bg-white  justify-center items-center rounded-full`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
}
