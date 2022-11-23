import React from "react";
import { Modal } from "@nextui-org/react";
import Header from "./Header/Header";
import Body from "./Body/Body";

const MyModal = ({ closeHandler, visible, picture, name }) => {
  return (
    <Modal
      blur
      css={{ position: "fixed", left: 0, top: 0, height: "100%", w: 500 }}
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      color="neutral"
    >
      <Header />
      <Body picture={picture} name={name} />
    </Modal>
  );
};

export default MyModal;
