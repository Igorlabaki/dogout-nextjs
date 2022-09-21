import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { HeaderComponent } from "../Components/header";
import LayoutComponent from "../Components/Layout";
import { MainComponent } from "../Components/Main";
import { ModalComponent } from "../Components/modal";

const Home: NextPage = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(true);

  function handleCloseModal() {
    setmodalIsOpen(() => false);
  }
  return (
    <LayoutComponent>
      {modalIsOpen && (
        <ModalComponent
          onClose={handleCloseModal}
          text={
            "Create a better future for your kids and explore a sustainable life style together in a fun and safe enviroment, and let them take real sustainable actions such as cleaning up 1 meter of plastic or planting a tree, just to name few"
          }
          character={"/images/Kids/Pop-up Character.png"}
          ballon={"/images/Kids/Pop-up Balloon.png"}
        />
      )}
      <MainComponent />
    </LayoutComponent>
  );
};

export default Home;
