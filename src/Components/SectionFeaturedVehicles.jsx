import React from "react";


const groups = [
  [
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
  ],
  [
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
  ],
  [
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
    {
      src: "assets/img-featured-vehicles.jpeg",
      title: "2016 Tesla Model X P90D Ludicrous",
      status: "SOLD",
    },
  ],
];



export const SectionFeaturedVehicles = () => {
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
                {groups.map((featuredVehiclesData, index) => {
                  return (
                    <div class={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <div class="row">
                        {featuredVehiclesData.map(({ src, title, status }) => (
                          <div class="col-md-4 mb-3 div-container-example">
                            <div class="card div-card-example">
                              <img
                                class="img-fluid img-card"
                                alt="img-card"
                                src={src}
                              />
                              <div class="card-body-example">
                                <h4 class="card-title-example">{title}</h4>
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
      <button
        class="carousel-control-prev button"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next button"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </section>
  );
};
