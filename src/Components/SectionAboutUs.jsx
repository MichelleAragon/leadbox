import React from "react";

export const SectionAboutUs = () => {
  return (
    <div className="container-fluid section-aboutus">
      <div className="row">
        <article className="div-img-about-us col-sm-12 col-md-6 order-last">
          <img
            className="img-aboutus-left h-100"
            alt="img-aboutus"
            src="assets/img-aboutus-left-1.png"
          />
        </article>

        <article className="div-img-aboutus-content col-sm-12 col-md-6 order-md-last">
          <h3 className="">ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel quam nec metus pellentesque iaculis. Cras lobortis odio a nulla
            condimentum blandit. Donec laoreet euismod diam, in lobortis odio
            tincidunt in.
            <p />
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Vivamus eleifend, metus ut rutrum
              dignissim, erat diam pulvinar urna, laoreet convallis odio lorem
              at elit. Morbi iaculis metus et vestibulum commodo. Etiam lectus
              augue, congue vitae vestibulum sit amet, mattis finibus nulla.
            </p>
          </p>
        </article>
      </div>
    </div>
  );
};
