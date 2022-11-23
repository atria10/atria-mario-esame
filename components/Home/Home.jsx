import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SideBar from "../SideBar/SideBar";
import SearchBar from "../SearchBar/SearchBar";
import ChatList from "../ChatList/ChatList";
import Chat from "../Chat/Chat";

const Home = () => {

  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Box sx={{ flexGrow: 1, mt: 1 }}>
      <Grid container>
        <Grid xs={4}>
          <SideBar />
          <SearchBar />
          <ChatList setSelectedChat={setSelectedChat}/>
        </Grid>
        <Grid xs={8}>
          <Chat selectedChat={selectedChat} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
