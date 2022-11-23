import { Card, Text } from "@nextui-org/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Chat=()=> {
  return (
    <Card css={{ p: "$6", }}>
      <Header/>
      <Card.Divider />
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
      <Footer/>
    </Card>
  );
}

export default Chat;
