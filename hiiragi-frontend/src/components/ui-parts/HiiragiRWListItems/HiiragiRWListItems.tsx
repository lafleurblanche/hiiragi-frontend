/* react */
import * as React from 'react';

/* mui5 */
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader'

/* mui5(icons) */
import {
  ExpandLess,
  ExpandMore,
  MoveToInbox,
  StarBorder
} from '@mui/icons-material';

/* ui-elements */
import { ListItemsLink } from 'components/ui-elements/Link/ListItemsLink';

export const HiiragiRWListItems = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return(
    <React.Fragment>
      <ListSubheader component="div">
        営業キロ検索
      </ListSubheader>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <MoveToInbox />
        </ListItemIcon>
        <ListItemText primary="柊交通鉄道部" />
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemsLink href="/hiiragi/stalist/rw01">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="RW01" />
            </ListItemButton>
          </ListItemsLink>
        </List>
      </Collapse>
    </React.Fragment>
  );
};
