import { ThemeProvider } from "@emotion/react";
import { Box, Stack, createTheme } from "@mui/material";
import { useState } from "react";
// import { Outlet } from "react-router-dom";

import Feed from "../../component/Feed";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import AddBtn from "../../component/Add";
import  Rightbar from "../../component/Rightbar";

const HomePage = () => {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Box position={"relative"}>
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            {/* <Outlet /> */}
            <Rightbar />
          </Stack>
          <AddBtn />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;