import React from "react";

//Assets
import Kim from "./../assets/Kim.png";
import Robert from "./../assets/Robert.png";
import Christy from "./../assets/Christy.png";
import { ReactComponent as Star } from "./../assets/Star.svg";

const Testimonials = () => {
  return (
    <div className="bg-feature pt-20 sm:px-36 px-4">
      <div className="text-center">
        <h2 className="text-4xl mb-5 text-dark font-medium">
          Trusted by Thousands of
          <br className="hidden sm:inline" /> Happy Customer{" "}
        </h2>
        <p className="text-grey mb-14">
          These are the stories of our customers who have joined us with great
          <br className="hidden sm:inline" /> pleasure when using this crazy
          feature.{" "}
        </p>
      </div>
      <div className="flex flex-col  sm:flex-row">
        <div className="sm:mr-12 mb-8">
          <div className=" flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <img src={Kim} className="mb-2.5" alt="" />
              <div className="flex flex-col ml-7">
                <h6 className="font-medium text-lg text-dark mb-1">
                  Kim Young Jou{" "}
                </h6>
                <span className="text-secondary">Seoul, South Korea</span>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="mr-2.5 text-dark">4.5</span>
              <span>
                <Star />
              </span>
            </div>
          </div>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>
        <div className="sm:mr-12 mb-8">
          <div className=" flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <img src={Robert} className="mb-2.5" alt="" />
              <div className="flex flex-col ml-7">
                <h6 className="font-medium text-lg text-dark mb-1">
                  Viezh Robert{" "}
                </h6>
                <span className="text-secondary">Warsaw, Poland</span>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="mr-2.5 text-dark">4.5</span>
              <span>
                <Star />
              </span>
            </div>
          </div>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>{" "}
        <div className="sm:mr-12 mb-8">
          <div className=" flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <img src={Christy} className="mb-2.5" alt="" />
              <div className="flex flex-col ml-7">
                <h6 className="font-medium text-lg text-dark mb-1">
                  Yessica Christy
                </h6>
                <span className="text-secondary"> Shanxi, China </span>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="mr-2.5 text-dark">4.5</span>
              <span>
                <Star />
              </span>
            </div>
          </div>
          <p className="text-secondary">
            Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum
            sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum
            voluptate porro harum. Facilis voluptatum eum est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
