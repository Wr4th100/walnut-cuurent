import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center border-t mt-6">
      <div>
        <Link href="https://telegra.ph/Terms-of-Use-10-20-2" target="_blank">
          <Button variant={"link"}>Terms of Service</Button>
        </Link>
      </div>
      <div>
        <Link href="https://telegra.ph/Privacy-Policy-10-31-7" target="_blank">
          <Button variant={"link"}>Privacy Policy</Button>
        </Link>
      </div>
      <div>
        <Link href="mailto:hi@walnut.tv" target="_blank">
          <Button variant={"link"}>Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
