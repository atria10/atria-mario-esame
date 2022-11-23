import { User, Grid, Text } from "@nextui-org/react";
import { getContacts } from "../../../../../../../helpers/getContacts";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

const Contacts = () => {
  const contacts = getContacts();
  return (
    <>
      {contacts.map((contact) => (
        <Grid.Container gap={2} justify="center">
          <Grid xs={3}>
            <User src={contact.picture} name={contact.name} zoomed />
          </Grid>
          <Grid xs={6} css={{flexDirection:'column'}}>
            <Text>STATUS:</Text>
            <Text b>{contact.status}</Text>
          </Grid>
          <Grid xs={3}>
            <MapsUgcIcon style={{ cursor: "pointer" }} />
          </Grid>
        </Grid.Container>
      ))}
    </>
  );
};

export default Contacts;
