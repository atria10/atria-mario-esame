import React from "react";
import { Modal, Image, Text, Container } from "@nextui-org/react";

const Body = ({ picture,name }) => {
  return (
    <Modal.Body css={{}}>
      <Image
        width={200}
        height={200}
        src={picture}
        objectFit="fill"
        alt="Profile Image"
        css={{ borderRadius: "100%" }}
      />
      <Container>
        <Text>Your Name: </Text>
        <Text b h4>{name}</Text>
        <Text>Info: </Text>
        <Text b h4>No Info provided </Text>
      </Container>
    </Modal.Body>
  );
};

export default Body;
