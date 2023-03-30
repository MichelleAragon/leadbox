import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = ({ icon, children, ...rest }) => {
  return (
    <a {...rest}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      )}
        {children && children}
    </a>
  );
};
