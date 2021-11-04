import React from "react";

//Assets
import Illustration from "./../assets/Illustration2.png";
import { ReactComponent as Tick } from "./../assets/Tick.svg";

export const Features = () => {
  const features = [
    {
      id: 1,
      text: "Powerfull online protection.",
    },
    {
      id: 2,
      text: "Internet without borders.",
    },
    {
      id: 3,
      text: "Supercharged VPN",
    },
    {
      id: 4,
      text: "No specific time limits.",
    },
  ];
  return (
    <div className="flex bg-white sm:flex-row flex-col justify-evenly px-8 pb-28 mb-20 pt-8 mt-14 items-center">
      <img src={Illustration} alt="" />

      <div className="flex flex-col sm:mr-12">
        <h3 className="text-4xl text-dark font-bold mt-4 sm:mt-0 mb-5">
          We Provide Many <br className="hidden sm:inline" /> Features You Can
          Use
        </h3>
        <p className="mb-5 text-grey">
          You can explore the features that we provide with fun{" "}
          <br className="hidden sm:inline" /> and have their own functions each
          feature.
        </p>
        {features.map((x) => (
          <div key={x.id} className="flex flex-row mb-4">
            <span className="mr-2.5">
              <Tick />
            </span>
            <p className="text-grey">{x.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
