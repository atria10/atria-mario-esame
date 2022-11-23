import { Modal, Text } from "@nextui-org/react";
import React from "react";

const Header = () => {
  return (
    <Modal.Header css={{ height: "10%" }}>
      <Text h3 id="modal-title">
        New Chat
      </Text>
    </Modal.Header>
  );
};

export default Header;
