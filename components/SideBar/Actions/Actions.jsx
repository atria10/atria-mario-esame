import { Grid } from "@nextui-org/react";
import DataUsageIcon from '@mui/icons-material/DataUsage';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewChat from "./NewChat/NewChat";

const Actions=()=> {
  return (
    <Grid.Container gap={2} css={{width:'40%'}} justify="center">
      <Grid xs={4}>
        <DataUsageIcon/>
      </Grid>
      <Grid xs={4}>
        <NewChat/>
      </Grid>
      <Grid xs={4}>
      <MoreVertIcon/>
      </Grid>
    </Grid.Container>
  );
}

export default Actions;
