import React from "react";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { SiteMap } from "./TermsAndConditions";

export const SiteLinks = (props) => (
  <div {...props}>
    <Logo className="d-none d-md-block" color="white" />
    <SocialMediaLinks className="mt-4" />
    <SiteMap />
  </div>
);
