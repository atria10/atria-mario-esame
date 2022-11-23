import { User } from "@nextui-org/react";
import { useState } from "react";
import MyModal from "./MyModal/MyModal";

const Avatar = ({ picture,name }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <User src={picture} onClick={handler} />
      <MyModal closeHandler={closeHandler} visible={visible} picture={picture} name={name}/>
    </>
  );
};

export default Avatar;
