import React from "react";
import { Modal, Text } from "@nextui-org/react";

const Header = () => {
  return (
    <Modal.Header css={{height:'20%'}}>
      <Text h3 id="modal-title">
       Profile
      </Text>
    </Modal.Header>
  );
};

export default Header;
