import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "./Link";

const socialMediaData = [
  { icon: faFacebook, href: "https://www.facebook.com/", target: "_blank" },
  { icon: faTwitter, href: "https://www.twitter.com/", target: "_blank" },
  { icon: faYoutube, href: "https://www.youtube.com/", target: "_blank" },
  { icon: faInstagram, href: "https://www.instagram.com/", target: "_blank" },
  { icon: faPinterest, href: "https://www.pinterest.com/", target: "_blank" },
  { icon: faLinkedin, href: "https://www.linkedin.com/", target: "_blank" },
];

export const SocialMediaLinks = (props) => {
  return (
    <div {...props}>
      {" "}
      {socialMediaData.map((data) => (
        <Link {...data} className="btn-lg px-1" />
      ))}
    </div>
  );
};
