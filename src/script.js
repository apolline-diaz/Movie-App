// DOM

const swiper = document.querySelector("#swiper");

// constants

const urls = [
    "../assets/BringItOn.png",
    "../assets/DonnieDarko.png",
    "../assets/GhostWorld.png",
    "../assets/SaveTheLastDance.png",
    "../assets/FreakyFriday.png",
    "../assets/TheGirlNextDoor.png",
    "../assets/MeanGirls.png"
];

// variables

let cardCound = 0;

// functions
function appendNewCard(){
    const card = new Card({
    imageUrl: urls[cardCount % 5]
});
card.element.style.setProperty('--i', cardCount % 5);
swiper.append(card.element);
cardCount++;
}

// first 5 cards

for (let i = 0; i < 5; i++) {
    appendNewCard()
}