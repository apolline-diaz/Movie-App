import React from "react";
import Background from "../assets/background.png";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src={Background}
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Favorites</h1>
        </div>
      </div>
    </>
  );
};

export default Account;
