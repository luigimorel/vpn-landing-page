import React from "react";

//Assets
import Map from "./../assets/Global.png";
import { ReactComponent as Spotify } from "./../assets/Spotify.svg";

const GlobalMap = () => {
  return (
    <div className="sm:px-24 px-8">
      <div className="text-center">
        <h2 className="text-4xl mb-5 text-dark font-medium">
          Huge Global Network
          <br className="hidden sm:inline" /> of Fast VPN
        </h2>
        <p className="text-grey mb-14">
          Let's choose the package that is best for you and
          <br className="hidden sm:inline" /> explore it happily and cheerfully.
        </p>
      </div>

      <div className="">
        <img src={Map} alt="Map of the world with server points" />
      </div>

      <div className="flex sm:flex-row sm:mx-20 py-16 px-8 flex-col justify-between">
        <div className="flex flex-row items-center justify-between ">
          <span className="mr-9 mb-4 sm:mb-0">
            <Spotify />
          </span>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <span className="mr-9 mb-4 sm:mb-0">
            <Spotify />
          </span>
        </div>{" "}
        <div className="flex flex-row items-center justify-between ">
          <span className="mr-9 mb-4 sm:mb-0">
            <Spotify />
          </span>
        </div>{" "}
        <div className="flex flex-row items-center justify-between ">
          <span className="mr-9 mb-4 sm:mb-0">
            <Spotify />
          </span>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <span className="mr-9 mb-4 sm:mb-0">
            <Spotify />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
