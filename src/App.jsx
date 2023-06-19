import './App.css'

// component
import Feed from "./component/Feed";
import Sidebar from "./component/Sidebar";
import Rightbar from "./component/Rightbar";
import Navbar from "./component/Navbar";

import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import AddBtn from './component/Add';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddBtn />
      </Box>
    </ThemeProvider>
  )
}

export default App
