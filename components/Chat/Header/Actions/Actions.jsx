import { Grid, Row } from "@nextui-org/react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Actions = () => {
  return (
    <Grid.Container>
      <Grid xs={12}>
        <Row justify="space-between">
          <SearchIcon />
          <MoreVertIcon />
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default Actions;
