import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 p-2 mb-4 border-bottom">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span class="fs-4">D-Club Connect</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to={"/furniture"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
            }
          >
            Furniture
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to={"/clothes"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
            }
          >
            Clothes
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to={"/software"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
            }
          >
            Software
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to={"/about"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          {/* <a href="#" class="nav-link">
            About
          </a> */}
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
