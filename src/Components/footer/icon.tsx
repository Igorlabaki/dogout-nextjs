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
      h-[40px] w-[40px] bg-white  justify-center items-center rounded-full`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
}
