import React from "react";
import { WorkingHoursSelector } from "../components/WorkingHoursSelector";
import { Logo } from "../components/Logo";
import { ContactInfo } from "../components/ContactInfo";
import { SiteLinks } from "../components/SiteLinks";

export const Footer = () => {

  return (
    <footer className="container-fluid p-4 text-white text-center text-lg-start footer-container">
      <div className="row">
        <Logo className="col-sm-12 d-block d-md-none" color="white" />
        <ContactInfo className="col-md-4 col-sm-12" />
        <SiteLinks className="col-md-4 col-sm-12  order-4 d-flex flex-column " />
        <WorkingHoursSelector className="col-md-4 col-sm-12 order-md-4 working-hours-container" />
      </div>
    </footer>
  );
};
