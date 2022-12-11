/* mui5 */
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

/* mui5(icons) */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

/* recoil */
import { useRecoilState } from "recoil";
import { drawerOpenAtom } from "recoil/DrawerOpenAtom";

/* ui-elements */
import { Drawer } from "components/ui-elements/Drawer/Drawer";

/* ui-parts */
import { HiiragiRWListItems } from "components/ui-parts/HiiragiRWListItems/HiiragiRWListItems";

export default function HomeDrawer() {
  const [open, setOpen] = useRecoilState(drawerOpenAtom);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return(
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <HiiragiRWListItems />
      </List>
    </Drawer>
  )
};
