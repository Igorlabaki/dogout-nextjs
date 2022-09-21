import React, { useState } from "react";
import LayoutComponent from "../Components/Layout";
import HomePageComponent from "../Components/Main/home";
import { ModalComponent } from "../Components/modal";
import { Button } from "../Components/util/Button";

export default function HomePage() {
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
            <div className="h-[90%] w-[50%] md:w-[200px] md:ml-[-20px]">
              <img
                src={"/images/homePage/Pop-up Character.png"}
                alt="character"
                className="w-full h-full"
              />
            </div>

            <div className="h-[250px] w-[250px] md:h-[200px] md:w-[300px] absolute top-[-9rem] left-[4rem] md:left-[10rem] md:top-[-5rem]">
              <img
                src={"/images//homePage/Pop-up Balloon.png"}
                alt="character"
                className="w-full h-full"
              />
            </div>

            <div className="w-[200px] px-5 md:w-[300px] md:leading-[30px] translate-y-[30px] md:translate-y-[40px] h-full  font-light md:font-normal flex flex-col justify-center items-center text-justify text-[13px] lg:text-[20px] ml-5">
              <h1 className="font-extrabold text-[12px] md:text-[1.2rem]">
                TAKE REAL-LIFE SUSTAIN- ABLE ACTIONS,NOW!
              </h1>
              <p className="text-justify w-full">
                WeduGut is the destination to create a better future for all of
                us!Adopt a more sustainable life together with your friends and
                family in a fun way, and take real-life sustainable actions foR
                FREE!
              </p>
              <Button
                title={"GO"}
                titleClassname={"text-[20px] font-light"}
                className={`bg-pink-pattern w-full py-2 rounded-lg text-white font-semibold mt-10 lg:mt-16`}
                onClick={() => handleCloseModal()}
              />
            </div>
          </div>
        </ModalComponent>
      )}
      <HomePageComponent />
    </LayoutComponent>
  );
}
