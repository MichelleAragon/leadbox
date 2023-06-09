import React from "react";

export const Logo = ({ color, ...props }) => {
  return (
    <div {...props}>
      <img
        className="img-logo-leadbox "
        alt="logo"
        src={`assets/img-logo-leadbox-removebg-preview${
          color === "white" ? "-" + color : ""
        }.png`}
      />
    </div>
  );
};
