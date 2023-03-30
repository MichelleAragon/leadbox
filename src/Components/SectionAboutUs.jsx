import React from "react";

export const SectionAboutUs = () => {
  return (
    <div className="container-fluid section-aboutus">
      <div className="row   ">
        <article className="div-img-about-us col-sm-12 col-md-6 order-last">
          <img
            className="col-3 img-aboutus-left"
            alt="img-aboutus"
            src="assets/img-aboutus-left-1.png"
          />
        </article>

        <article className="div-img-aboutus-content col-sm-12 col-md-6 order-md-last">
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel quam nec metus pellentesque iaculis. Cras lobortis odio a nulla
            condimentum blandit. Donec laoreet euismod diam, in lobortis odio
            tincidunt in. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Vivamus eleifend, metus ut rutrum
            dignissim, erat diam pulvinar urna, laoreet convallis odio lorem at
            elit. Morbi iaculis metus et vestibulum commodo. Etiam lectus augue,
            congue vitae vestibulum sit amet, mattis finibus nulla. Duis dictum
            condimentum viverra. Curabitur cursus, nisi sit amet maximus
            imperdiet, odio augue tincidunt neque, nec condimentum lectus enim
            at est. Praesent accumsan sed quam id rutrum. Quisque quis turpis
            eget ex euismod fermentum. Fusce id nisi lacus. Vestibulum et
            aliquet purus.
          </p>
        </article>
      </div>
    </div>
  );
};
