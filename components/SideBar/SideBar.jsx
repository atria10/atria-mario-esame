import { Card} from "@nextui-org/react";
import Actions from "./Actions/Actions";
import Avatar from "./Avatar/Avatar";

const SideBar=()=> {
  return (
    <Card>
      <Card.Header css={{d:'flex', justifyContent:'space-between'}}>
        <Avatar/>
        <Actions/>
      </Card.Header>
      <Card.Divider />
    </Card>
  );
}

export default SideBar;