import React, { useEffect, useState } from "react";
import { ButtonCarousel } from "./ButtonCarousel";

const DeviceType = { MOBILE: "SM", TABLET: "MD", DESKTOP: "LG" };

const vehicleData = {
  src: "assets/img-featured-vehicles.jpeg",
  title: "2016 Tesla Model X P90D Ludicrous",
  status: "SOLD",
};

const groups = {
  LG: [
    [{ ...vehicleData }, { ...vehicleData }, { ...vehicleData }],
    [{ ...vehicleData }, { ...vehicleData }, { ...vehicleData }],
    [{ ...vehicleData }, { ...vehicleData }, { ...vehicleData }],
  ],
  MD: [
    [{ ...vehicleData }, { ...vehicleData }],
    [{ ...vehicleData }, { ...vehicleData }],
    [{ ...vehicleData }, { ...vehicleData }],
    [{ ...vehicleData }, { ...vehicleData }],
    [{ ...vehicleData }],
  ],
  SM: [
    [{ ...vehicleData }],
    [{ ...vehicleData }],
    [{ ...vehicleData }],
    [{ ...vehicleData }],
    [{ ...vehicleData }],
    [{ ...vehicleData }],
    [{ ...vehicleData }],
    [{ ...vehicleData }],
    [{ ...vehicleData }],
  ],
};
const getSize = (size) => {
    if (size <= 767) {
      return DeviceType.MOBILE;
    } else if (size >= 768 && size <= 1023) {
      return DeviceType.TABLET;
    } else {
      return DeviceType.DESKTOP;
    }
}
export const SectionFeaturedVehicles = () => {
  const [deviceSize, setDeviceSize] = useState(getSize(window.innerWidth));

  const handleResize = () => {
    setDeviceSize(getSize(window.innerWidth))
  };


  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <section
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 div-carousel">
            <div
              id="carouselExampleIndicators2"
              class="carousel slide"
              data-ride="carousel"
            >
              <h2 class="title-featured-vehicles">FEATURED VEHICLES</h2>
              <div class="carousel-inner">
                {groups[deviceSize].map((featuredVehiclesData, index) => {
                  return (
                    <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <div class="row">
                        {featuredVehiclesData.map(({ src, title, status }) => (
                          <div class="col-sm-12 col-md-6 col-lg-4 mb-3 div-container-example">
                            <div class="card div-card-example">
                              <div class="card-header bg-transparent justify-content-start">
                                <h4 class="card-title">{title}</h4>
                              </div>
                              <img
                                class="img-fluid img-card"
                                alt="img-card"
                                src={src}
                              />
                              <div class="card-body-example card">
                                <p class="card-text-example">{status}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonCarousel />
    </section>
  );
};
