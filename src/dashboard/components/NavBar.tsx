import { MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

interface Props {
  draweWidth: number;
  namePage: string;
}

export const NavBar = ({ draweWidth = 240, namePage }: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${draweWidth}px)` },
        ml: { sm: ` ${draweWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" noWrap component={"div"}>
            {namePage}
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
