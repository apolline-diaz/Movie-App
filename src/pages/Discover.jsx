import React from "react";
import "../styles/Discover.css";

import BringItOn from "../assets/BringItOn.png";
import DonnieDarko from "../assets/DonnieDarko.png";
import GhostWorld from "../assets/GhostWorld.png";
import SaveTheLastDance from "../assets/SaveTheLastDance.png";
import FreakyFriday from "../assets/FreakyFriday.png";
// import TheGirlNextDoor from "../assets/TheGirlNextDoor.png";
// import MeanGirls from "../assets/MeanGirls.png";

const Discover = () => {
  const cards = [
    { id: 0, src: BringItOn },
    { id: 1, src: DonnieDarko },
    { id: 2, src: GhostWorld },
    { id: 3, src: SaveTheLastDance },
    { id: 4, src: FreakyFriday },
    // { id: 5, src: TheGirlNextDoor },
    // { id: 6, src: MeanGirls },
  ];

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-evenly items-center overflow-hidden bg-gradient-linear-custom bg-gradient-to-r from-[#ff6036] to-[#fd267a]">
        <div id="swiper">
          {cards.map((card) => (
            <div key={card.id} className="card" style={{ "--i": card.id }}>
              <img src={card.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
