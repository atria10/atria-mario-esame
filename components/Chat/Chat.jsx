import { Card } from "@nextui-org/react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Chat = () => {
  return (
    <Card css={{ p: "$6",height:'95vh' }}>
      <Header />
      <Card.Divider />
      <Body />
      <Card.Divider />
      <Footer />
    </Card>
  );
};

export default Chat;
