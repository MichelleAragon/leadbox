import React from "react";

const links = [
  { label: "Site Map" },
  { label: "Terms And Conditions" },
  { label: "Privacy Policy" },
];

export const SiteMap = () => (
  <div className="d-flex justify-content-center mt-2">
    <div className="site-map-container ">
      {links.map(({ label }, index) => (
        <>
          <span>{label}</span>
          <span>{index !== links.length - 1 ? " | " : ""}</span>
        </>
      ))}

      <div className="d-flex justify-content-center mt-2">
        <p>Dealership © 2022 | Powered by Leadbox</p>
      </div>
    </div>
  </div>
);
