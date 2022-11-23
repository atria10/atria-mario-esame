import React from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import Avatar from "../../SideBar/Avatar/Avatar";
import Actions from "./Actions/Actions";

const Header = () => {
  return (
    <Card.Header css={{ m: "0 auto", pt: 5, px: 0 }}>
      <Avatar />
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={11}>
          <Text h4 b css={{ lineHeight: "$xs" }}>
            name
          </Text>
        </Grid>
        <Grid xs={1}>
          <Actions />
        </Grid>
      </Grid.Container>
    </Card.Header>
  );
};

export default Header;
