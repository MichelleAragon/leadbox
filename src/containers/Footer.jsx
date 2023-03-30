import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Dropdown } from "../components/Dropdown";
import { Link } from "../components/Link";
import { WorkingHoursSelector } from "../components/WorkingHoursSelector";
import { Logo } from "../components/Logo";
import { SocialMediaLinks } from "../components/SocialMediaLinks";
import { SiteMap } from "../components/TermsAndConditions";
import { ContactInfo } from "../components/ContactInfo";
import { SiteLinks } from "../components/SiteLinks";

const works = [
  { label: "SALES", value: 1 },
  { label: "SERVICE", value: 2 },
  { label: "PARTS", value: 3 },
];

const WorkingHours = ({ work }) => {
  if (work.value === works[1].value) {
    return <div>Render Service working hours</div>;
  }

  if (work.value === works[2].value) {
    return <div> Render Parts working hours</div>;
  }

  return <div> Render Sales working hours</div>;
};

export const Footer = () => {
  const [typeOfWork, setTypeOfWork] = useState(works[0]);

  return (
    <footer class="container-fluid p-4 text-white text-center text-lg-start footer-container">
      <div class="row">
        <Logo className="col-sm-12 d-block d-md-none" color="white" />
        <ContactInfo className="col-md-4 col-sm-12" />
        <SiteLinks className="col-md-4 col-sm-12  order-4" />
        <WorkingHoursSelector className="col-md-4 col-sm-12 order-md-4 working-hours-container" />
      </div>
    </footer>
  );
};
