import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import SideBar from '../SideBar/SideBar';
import SearchBar from '../SearchBar/SearchBar';
import ChatList from '../ChatList/ChatList';

const Home=()=> {
  return (
    <Box sx={{ flexGrow: 1,mt:1 }}>
      <Grid container>
        <Grid xs={4}>
          <SideBar/>
          <SearchBar/>
          <ChatList/>
        </Grid>
        <Grid xs={8}>
          <div>chat</div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
