import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ItemProp } from "../helpers";
import { Link } from "react-router-dom";

interface Props {
  item: ItemProp;
}

export const SideBarItem = ({ item }: Props) => {
  const { name, path } = item;

  return (
    <Link
      to={path}
      style={{ textDecoration: "none", color: "#5F5F5F", fontWeight: "bolder" }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ArrowForwardIosOutlined />
          </ListItemIcon>
          <Grid>
            <ListItemText primary={name} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
