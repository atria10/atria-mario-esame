import { Grid } from "@nextui-org/react";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Actions = () => {
  return (
    <Grid.Container  css={{ px: 1 }}>
      <Grid xs={6}>
        <SearchIcon />
      </Grid>
      <Grid xs={6}>
        <MoreVertIcon />
      </Grid>
    </Grid.Container>
  );
};

export default Actions;
