import React from "react";
import { Modal, Image, Text, Container } from "@nextui-org/react";
import SearchBar from "../../../../../SearchBar/SearchBar";
import Contacts from "./Contacts/Contacts";

const Body = () => {
  return (
    <Modal.Body >
      <SearchBar/>
      <Contacts/>
    </Modal.Body>
  );
};

export default Body;
