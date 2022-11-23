import { Card } from "@nextui-org/react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NoChatSelected from "./NoChatSelected/NoChatSelected";

const Chat = ({ selectedChat }) => {
  console.log({selectedChat})
  return (
    <>
      {selectedChat ? (
        <Card css={{ p: "$6", minHeight: "97vh", position: "fixed",width:'67%' }}>
          <Header name={selectedChat.name} picture={selectedChat.picture} />
          <Card.Divider />
          <Body />
          <Card.Divider />
          <Footer />
        </Card>
      ) : (
        <NoChatSelected/>
      )}
    </>
  );
};

export default Chat;
