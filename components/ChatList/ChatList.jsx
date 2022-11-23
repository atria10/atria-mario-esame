import { Card,Container, User, Grid, Text } from "@nextui-org/react";
import { getFriends } from "../../helpers/getFriends";

const ChatList = ({setSelectedChat}) => {
const friends=getFriends();
  return (
    <>
      {friends.map((friend) => (
        <Card
          key={friend.id}
          isPressable
          isHoverable
          onClick={()=>{setSelectedChat(friend)}}
          variant="bordered"
          css={{ w: "95%", mx: "auto" }}
        >
          <Card.Body css={{ m: 0, p: 0, mx: "auto" }}>
            <Grid.Container
              gap={2}
              justify="center"
              css={{ m: 0, p: 0, w: "90%" }}
            >
              <Grid xs={3}>
                <User
                  src={friend?.picture}
                  size="lg"
                ></User>
              </Grid>
              <Grid xs={8} css={{ display: "flex", flexDirection: "column" }}>
                <Text b>{friend?.name}</Text>
                <Text >{friend?.lastChat.length>50? friend?.lastChat.slice(0,50)+"..." :friend?.lastChat}</Text>
              </Grid>
              <Grid xs={1}>
                <Text css={{fontSize:12}}>{friend.latest_timestamp}</Text>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ChatList;
