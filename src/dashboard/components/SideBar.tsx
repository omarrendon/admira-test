import React from "react";
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { SideBarItem } from "./SideBarItem";
import { menuItems } from "../helpers";

interface Props {
  draweWidth: number;
}

export const SideBar = ({ draweWidth = 240 }: Props) => {
  return (
    <Box
      component={"nav"}
      sx={{
        width: { sm: draweWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: draweWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            {/* {displayName} */}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {menuItems.length &&
            menuItems.map(item => <SideBarItem key={item.id} item={item} />)}
        </List>
      </Drawer>
    </Box>
  );
};
