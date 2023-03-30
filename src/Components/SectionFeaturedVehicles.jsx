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
    [{ ...vehicleData, id: 1 }, { ...vehicleData, id: 2 }, { ...vehicleData, id: 3 }],
    [{ ...vehicleData, id: 4 }, { ...vehicleData, id: 5 }, { ...vehicleData, id: 6 }],
    [{ ...vehicleData, id: 7 }, { ...vehicleData, id: 8 }, { ...vehicleData, id: 9 }],
  ],
  MD: [
    [{ ...vehicleData, id: 1 }, { ...vehicleData, id: 2 }],
    [{ ...vehicleData, id: 3 }, { ...vehicleData, id: 4 }],
    [{ ...vehicleData, id: 5 }, { ...vehicleData, id: 6 }],
    [{ ...vehicleData, id: 7 }, { ...vehicleData, id: 8 }],
    [{ ...vehicleData, id: 9 }],
  ],
  SM: [
    [{ ...vehicleData, id: 1 }],
    [{ ...vehicleData, id: 2 }],
    [{ ...vehicleData, id: 3 }],
    [{ ...vehicleData, id: 4 }],
    [{ ...vehicleData, id: 5 }],
    [{ ...vehicleData, id: 6 }],
    [{ ...vehicleData, id: 7 }],
    [{ ...vehicleData, id: 8 }],
    [{ ...vehicleData, id: 9 }],
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
};
export const SectionFeaturedVehicles = () => {
  const [deviceSize, setDeviceSize] = useState(getSize(window.innerWidth));

  const handleResize = () => {
    setDeviceSize(getSize(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <section
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 div-carousel">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <h2 className="title-featured-vehicles">FEATURED VEHICLES</h2>
              <div className="carousel-inner">
                {groups[deviceSize].map((featuredVehiclesData, index) => {
                  return (
                    <div key={featuredVehiclesData.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <div className="row">
                        {featuredVehiclesData.map(({ src, title, status }) => (
                          <div key={featuredVehiclesData.id} className="col-sm-12 col-md-6 col-lg-4 mb-3 div-container-example">
                            <div className="card div-card-example">
                              <div className="card-header bg-transparent justify-content-start">
                                <h4 className="card-title">{title}</h4>
                              </div>
                              <img
                                className="img-fluid img-card"
                                alt="img-card"
                                src={src}
                              />
                              <div className="card-body-example card">
                                <p className="card-text-example">{status}</p>
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
