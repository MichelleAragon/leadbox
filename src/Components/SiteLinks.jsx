import React from "react";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { SiteMap } from "./TermsAndConditions";

export const SiteLinks = (props) => (
  <div {...props}>
    <Logo className="d-none d-md-block pb-2 mx-auto justify-content-center" color="white" />
    <SocialMediaLinks className="mt-2 d-flex justify-content-center" />
    <SiteMap className="d-flex justify-content-center" />
  </div>
);
