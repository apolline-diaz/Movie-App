// import React from "react";

// const Card = ({ imageUrl, index }) => {
//   return (
//     <div className="card" style={{ "--i": index }}>
//       <img src={imageUrl} alt="" />
//     </div>
//   );
// };

// export default Card;

class Card {
  constructor({ imageUrl }) {
    this.imageUrl = imageUrl;
    this.#init();
  }
  //private properties

  //private methods

  #init = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = this.imageUrl;
    card.append(img);
    this.element = card;
    this.#listenToMouseEvents();
  }
  #listenToMouseEvents = () => {
    // mousedown
    this.element.addEventListener("mousedown")
  }
}