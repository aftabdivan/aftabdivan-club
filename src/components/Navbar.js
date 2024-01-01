import React from "react";
import { NavLink } from "react-router-dom";
import captainJackSparrow from "../Images/captain-jack-sparrow.png";

const Navbar = () => {
  const navData = [
    { path: "/", headerTitle: "Home" },
    { path: "/furniture", headerTitle: "Furniture" },
    { path: "/clothes", headerTitle: "Clothes" },
    { path: "/software", headerTitle: "Software" },
    { path: "/medical", headerTitle: "Medical" },
    { path: "/about", headerTitle: "About" },
  ];
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 p-2 mb-4 border-bottom">
      <NavLink
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        to={"/"}
      >
        <img
          className="bi me-2"
          width="32"
          height="32"
          src={captainJackSparrow}
        ></img>
        <span class="fs-4">D-Club Connect</span>
      </NavLink>

      <ul class="nav nav-pills">
        {navData.map((item) => {
          return (
            <li class="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.headerTitle}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
