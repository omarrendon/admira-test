import React from "react";

import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

const draweWidth = 240;

interface Props {
  children: React.ReactNode;
  namePage: string;
}

export const DashboarLayout: React.FC<Props> = ({ children, namePage }) => (
  <Box sx={{ display: "flex" }}>
    <NavBar draweWidth={draweWidth} namePage={namePage} />
    <SideBar draweWidth={draweWidth} />
    <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  </Box>
);
