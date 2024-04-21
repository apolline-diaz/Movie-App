import React, { useState } from "react";
import "../styles/Swiper.css";

import Card from "../components/Card";
import bringItOn from "../assets/BringItOn.png";
import donnieDarko from "../assets/DonnieDarko.png";
import ghostWorld from "../assets/GhostWorld.png";
import saveTheLastDance from "../assets/SaveTheLastDance.png";
import freakyFriday from "../assets/FreakyFriday.png";

const Swiper = () => {
  const [cardCount, setCardCount] = useState(5);

  const images = [
    bringItOn,
    donnieDarko,
    ghostWorld,
    saveTheLastDance,
    freakyFriday,
  ];

  const appendNewCard = () => {
    setCardCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="h-screen w-full overflow-hidden flex justify-evenly items-center bg-gradient-to-r from-pink-600 to-red-600">
      <div id="swiper">
        {images.map((imageUrl, index) => (
          <Card
            key={index}
            imageUrl={imageUrl}
            index={index}
            onDismiss={appendNewCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
