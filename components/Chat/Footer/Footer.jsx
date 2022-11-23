import React from "react";
import { Card,Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <Card.Footer>
      <Link
        icon
        color="primary"
        target="_blank"
        href="https://github.com/nextui-org/nextui"
      >
        Visit source code on GitHub.
      </Link>
    </Card.Footer>
  );
};

export default Footer;
