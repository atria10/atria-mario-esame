import { Card} from "@nextui-org/react";
import { useState } from "react";
import { getPersonalInfo } from "../../helpers/getPersonalInfo";
import Actions from "./Actions/Actions";
import Avatar from "./Avatar/Avatar";

const SideBar=()=> {
  const [data, setData] = useState(getPersonalInfo());

  return (
    <Card>
      <Card.Header css={{d:'flex', justifyContent:'space-between'}}>
        <Avatar picture={data.picture} name={data.name}/>
        <Actions/>
      </Card.Header>
      <Card.Divider />
    </Card>
  );
}

export default SideBar;