import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "../util/Button";

export interface propsAuthModal {
  onClose: () => void;
  text: string;
  character: string;
  ballon: string;
  animation: boolean;
}

export function ModalComponent({
  animation,
  onClose,
  text,
  character,
  ballon,
}: propsAuthModal) {
  const handleOutsideClick = (e: any) => {
    if (e.target.id) onClose();
  };

  return (
    <>
      <div className="flex w-full h-full justify-center items-center overflow-y-scroll">
        <div
          id="external"
          onClick={() => handleOutsideClick}
          className="flex w-full h-full fixed top-0 right-0 z-50 bg-black opacity-60"
        />
        <div
          id="internal"
          className={`flex justify-center items-center rounded-[1.25rem] w-full h-full flex-col fixed z-[60] top-0 max-w-[48rem] px-[0.75rem] pt-[1.25rem] pb-[0.75rem]    
          border-none  lg:pt-[2.5rem] lg:pb-[2.5rem]`}
        >
          <div
            className={`${animation ? "animate-closeMenu" : null}
          w-[90%] h-[67%] md:h-[600px] md:w-[600px] bg-gray-pattern border-[10px] border-purple-pattern animate-openMenu  rounded-lg flex justify-ends items-end relative`}
          >
            <div className="h-[90%] w-[50%] md:w-[200px] md:ml-[20px]">
              <img src={character} alt="character" className="w-full h-full" />
            </div>

            <div className="h-[200px] w-[200px] md:h-[200px] md:w-[300px] absolute top-[-7rem] left-[7rem] md:left-[10rem] md:top-[-5rem]">
              <img src={ballon} alt="character" className="w-full h-full" />
            </div>

            <div className="w-[150px] md:w-[300px] md:leading-[30px] md:translate-y-[50px] h-full  font-light md:font-normal flex flex-col justify-center items-center text-justify text-[13px] lg:text-[20px]">
              <p>{text}</p>
              <Button
                title={"Play"}
                className={`bg-pink-pattern w-full py-2 rounded-lg text-white font-semibold mt-10 lg:mt-48`}
                onClick={() => onClose()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
