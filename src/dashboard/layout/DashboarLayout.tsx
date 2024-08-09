import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import React from "react";

const draweWidth = 240;

interface Props {
  children: React.ReactNode;
}

export const DashboarLayout: React.FC<Props> = ({ children }) => (
  <Box
    sx={{ display: "flex" }}
    className="animate__animated animate__fadeIn animate__faster"
  >
    <NavBar draweWidth={draweWidth} />
    <SideBar draweWidth={draweWidth} />
    <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  </Box>
);
