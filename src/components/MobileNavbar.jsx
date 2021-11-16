import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const menuList = [
    {
      id: 1,
      text: "About",
      route: "#about",
    },
    {
      id: 2,
      text: "Features",
      route: "/features",
    },
    {
      id: 3,
      text: "Pricing",
      route: "/pricing",
    },
    {
      id: 4,
      text: "Testimonials",
      route: "/testimonials",
    },
    {
      id: 5,
      text: "Help",
      route: "/help",
    },
  ];

  return (
    <div>
      <div className="sm:hidden dropdown ">
        <ul className=" bg-white mt-2.5 absolute min-w-full dropdown-menu ">
          {menuList.map((x) => (
            <li key={x.id} className="active">
              <NavLink
                to={x.route}
                className="block text-sm px-2 py-3 hover:text-primary hover:font-semibold"
              >
                {x.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
