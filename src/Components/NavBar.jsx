import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <img class="navbar-brand img-logo-leadbox " src='assets/img-logo-leadbox.jpeg' alt='logo-leadbox'/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    NEW
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">New Vehicle Inventory</a></li>
                    <li><a class="dropdown-item" href="#">2023 Ford Lightning</a></li>
                    <li><a class="dropdown-item" href="#">2023 Ford Bronco</a></li>
                    <li><a class="dropdown-item" href="#">New Vehicle Specials</a></li>
                  </ul>
                </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">USED</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SERVICE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">PARTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT</a>
              </li>
              
            </ul>
          </div>
            <span class="span-icon-search">
              <FontAwesomeIcon icon={faMagnifyingGlass}  />
            </span>
        </div>
      </nav>
    </>
  )
}
