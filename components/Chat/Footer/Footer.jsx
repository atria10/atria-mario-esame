import { Card, Grid, Input, Row } from "@nextui-org/react";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

const Footer = () => {
  return (
    <Card.Footer css={{ height:'10%'}}>
      <Grid.Container gap={2} justify="center" alignItems='center'>
        <Grid xs={1}>
          <Row justify="space-between">
            <InsertEmoticonOutlinedIcon />
            <AttachFileOutlinedIcon />
          </Row>
        </Grid>
        <Grid xs={10}>
          <Input fullWidth placeholder="Write a message" />
        </Grid>
        <Grid xs={1}>
          <MicOutlinedIcon />
        </Grid>
      </Grid.Container>
    </Card.Footer>
  );
};

export default Footer;
