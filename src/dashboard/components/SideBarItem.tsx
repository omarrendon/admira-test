import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface ItemProp {
  name: string;
  id: number;
}

interface Props {
  item: ItemProp;
}

export const SideBarItem = ({ item }: Props) => {
  const { name } = item;

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid>
          <ListItemText primary={name} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
