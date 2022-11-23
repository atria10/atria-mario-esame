import React, { useState } from "react";
import { Card, Text } from "@nextui-org/react";
import bg from "../../../public/bg.jpg";

const Body = ({ lastChat, time }) => {
  return (
    <Card.Body
      css={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Card css={{ mw: "400px", $$cardColor: "$colors$neutral" }}>
        <Card.Body>
          <Text color="#fff">{lastChat}</Text>
        </Card.Body>
        <Card.Footer css={{ justifyContent: "flex-end" }}>
          <Text color="#fff">{time}</Text>
        </Card.Footer>
      </Card>
    </Card.Body>
  );
};

export default Body;
