import React from "react";
import { Card, Text } from "@nextui-org/react";
import bg from "../../../public/bg.jpg";

const Body = () => {
  return (
    <Card.Body
      css={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Text>Make beautiful websites regardless of your design experience.</Text>
    </Card.Body>
  );
};

export default Body;
