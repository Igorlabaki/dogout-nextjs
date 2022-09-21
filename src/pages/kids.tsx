import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { HeaderComponent } from "../Components/header";
import LayoutComponent from "../Components/Layout";
import { MainComponent } from "../Components/Main/kids";
import { ModalComponent } from "../Components/modal";
import { Button } from "../Components/util/Button";

export default function KidsPage() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  const [animation, setAnimation] = useState(true);

  function handleCloseModal() {
    setmodalIsOpen(() => false);
  }
  return (
    <LayoutComponent>
      {modalIsOpen && (
        <ModalComponent onClose={handleCloseModal}>
          <div
            className={`${animation ? "animate-closeMenu" : null}
          w-[90%] h-[67%] md:h-[600px] md:w-[600px] bg-gray-pattern border-[10px] border-purple-pattern animate-openMenu  rounded-lg flex justify-ends items-end relative`}
          >
            <div className="h-[90%] w-[50%] md:w-[200px] md:ml-[20px]">
              <img
                src={"/images/Kids/Pop-up Character.png"}
                alt="character"
                className="w-full h-full"
              />
            </div>

            <div className="h-[200px] w-[200px] md:h-[200px] md:w-[300px] absolute top-[-7rem] left-[7rem] md:left-[10rem] md:top-[-5rem]">
              <img
                src={"/images/Kids/Pop-up Balloon.png"}
                alt="character"
                className="w-full h-full"
              />
            </div>

            <div className="w-[120px] md:w-[300px] md:leading-[30px] translate-y-[55px] md:translate-y-[50px] h-full  font-light md:font-normal flex flex-col justify-center items-center text-justify text-[13px] lg:text-[20px]">
              <p>
                Create a better future for your kids and explore a sustainable
                life style together in a fun and safe enviroment, and let them
                take real sustainable actions such as cleaning up 1 meter of
                plastic or planting a tree, just to name few
              </p>
              <Button
                title={"Go"}
                className={`bg-pink-pattern w-full py-2 rounded-lg text-white font-semibold mt-5 lg:mt-48`}
                onClick={() => handleCloseModal()}
              />
            </div>
          </div>
        </ModalComponent>
      )}
      <MainComponent />
    </LayoutComponent>
  );
}
