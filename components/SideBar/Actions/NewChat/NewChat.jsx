import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import MyModal from "./MyModal/MyModal";

const NewChat = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <ChatIcon onClick={handler} sx={{cursor:'pointer'}}/>
      <MyModal
        closeHandler={closeHandler}
        visible={visible}
      />
    </>
  );
};

export default NewChat;
