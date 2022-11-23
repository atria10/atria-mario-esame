import { Card, Container, Text } from "@nextui-org/react";
import bg from "../../../public/bg.jpg";

const NoChatSelected = () => {
  return (
    <Container css={{ minHeight: "95vh", position: "fixed",backgroundImage: `url(${bg.src})`}}>
      <Card css={{ mw: "400px",m:'20%' }}>
        <Card.Body>
          <Text>Click a contact to see the chat</Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NoChatSelected;
