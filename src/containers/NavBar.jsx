import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../components/Logo";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top bg-light">
      <div class="container-fluid">
        <Logo className="navbar-brand" />
        <button
          class="navbar-toggler order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle dropdown-toggle-after "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                NEW
              </a>
              <ul class="dropdown-menu">
                <li class="dropdown-item-hover">New Vehicle Inventory</li>
                <li class="dropdown-item-hover">2023 Ford Lightning</li>
                <li class="dropdown-item-hover">2023 Ford Bronco</li>
                <li class="dropdown-item-hover">New Vehicle Specials</li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                USED
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SERVICE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                PARTS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
        <div className="ms-auto p-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </nav>
  );
};
