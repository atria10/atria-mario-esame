import { Card, Grid, Row, Textarea } from "@nextui-org/react";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const Footer = ({ }) => {
  const [message, setMessage] = useState("");

  console.log("message", message);
  const sendMessage = () => {
   console.log("send",message)
  };

  return (
    <Card.Footer css={{ height: "10%" }}>
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={1}>
          <Row justify="space-between">
            <InsertEmoticonOutlinedIcon />
            <AttachFileOutlinedIcon />
          </Row>
        </Grid>
        <Grid xs={10} css={{ alignItems: "center" }}>
          <Textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            fullWidth
            maxRows={4}
            minRows={2}
            label=" "
            placeholder="Write a message"
            css={{ marginRight: 5 }}
          />
          <SendIcon onClick={() => sendMessage()} />
        </Grid>
        <Grid xs={1}>
          <MicOutlinedIcon />
        </Grid>
      </Grid.Container>
    </Card.Footer>
  );
};

export default Footer;
