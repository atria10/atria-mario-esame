import React from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import Avatar from "../../SideBar/Avatar/Avatar";
import Actions from "./Actions/Actions";

const Header = ({name,picture}) => {
  return (
    <Card.Header css={{ height:'10%'}}>
      <Avatar picture={picture}/>
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={11}>
          <Text h4 b css={{ lineHeight: "$xs" }}>{name}</Text>
        </Grid>
        <Grid xs={1}>
          <Actions />
        </Grid>
      </Grid.Container>
    </Card.Header>
  );
};

export default Header;
