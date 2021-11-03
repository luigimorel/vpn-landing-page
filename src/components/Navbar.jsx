import React, { useState } from "react";
import { Link } from "react-router-dom";

//Assets
import Logo from "./../assets/Logo.png";
import { ReactComponent as BurgerMenu } from "./../assets/BurgerMenu.svg";

const Navbar = () => {
  // State for the navbar
  const [open, setOpen] = useState(false);

  const menuList = [
    {
      id: 1,
      text: "About",
      route: "/",
    },
    {
      id: 2,
      text: "Features",
      route: "/",
    },
    {
      id: 3,
      text: "Pricing",
      route: "/",
    },
    {
      id: 4,
      text: "Testimonials",
      route: "/",
    },
    {
      id: 5,
      text: "Help",
      route: "/",
    },
  ];
  return (
    <div className="flex flex-row justify-between items-center pt-10 px-36 mb-10 ">
      <Link to="/">
        <img src={Logo} loading="lazy" alt="" />
      </Link>

      <p className="sm:hidden">
        <BurgerMenu onClick={() => setOpen(!open)} />
      </p>

      <div className="sm:flex  md:flex-row hidden  items-center">
        <ul className="flex flex-row   ">
          {menuList.map((x) => (
            <Link key={x.id} to={x.route}>
              <li className=" mr-8 sm:mr-4 hover:font-medium  hover:border-blue-500  text-lg hover:text-primary  pb-1">
                {x.text}
              </li>
            </Link>
          ))}
        </ul>
        <Link to="/">
          <button className=" ml-32  mr-8 text-dark font-bold border-0 transition duration-500 ease-in-out hover:mr-2  transform hover:-translate-y-1 hover:scale-110 rounded-md px-8 py-2.5 hover:bg-primary ">
            Sign In
          </button>
        </Link>

        <Link to="/">
          <button className=" border-2  rounded-xl hover:text-white text-primary font-bold transition duration-500 ease-in-out  hover:mr-2 transform hover:-translate-y-1 hover:scale-110  px-8 py-2.5 hover:bg-primary ">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
