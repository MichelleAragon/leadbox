import React from "react";

const links = [
  { label: "Site Map" },
  { label: "Terms And Conditions" },
  { label: "Privacy Policy" },
];

export const SiteMap = () => (
  <div className="site-map-container">
    {links.map(({ label }, index) => (
      <>
        <a>{label}</a>
        <span>{index !== links.length - 1 ? " | " : ""}</span>
      </>
    ))}

    <p>Dealership © 2022 | Powered by Leadbox</p>
  </div>
);
