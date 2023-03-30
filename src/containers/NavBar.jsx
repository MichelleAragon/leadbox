import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../components/Logo";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light">
      <div className="container-fluid">
        <Logo className="navbar-brand" />
        <button
          className="navbar-toggler d-md-none order-3 border border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end px-3"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown ">
              <button
                className="nav-link dropdown-toggle dropdown-toggle-after border border-0 bg-light"
                // role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                NEW
              </button>
              <ul className="dropdown-menu ps-3">
                <li className="dropdown-item-hover">New Vehicle Inventory</li>
                <li className="dropdown-item-hover">2023 Ford Lightning</li>
                <li className="dropdown-item-hover">2023 Ford Bronco</li>
                <li className="dropdown-item-hover">New Vehicle Specials</li>
              </ul>
            </li>
            <li className="nav-item">
              <button className="nav-link border border-0 bg-light" aria-current="page">
                USED
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link border border-0 bg-light">
                SERVICE
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link border border-0 bg-light">
                PARTS
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link border border-0 bg-light">
                ABOUT
              </button>
            </li>
          </ul>
        </div>
        <div className="ms-auto p-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </div>
      </div>
    </nav>
  );
};
