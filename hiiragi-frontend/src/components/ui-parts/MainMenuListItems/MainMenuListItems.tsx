/* react */
import * as React from 'react';

/* mui5 */
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

/* mui5(icons) */
import {
  StarBorder
} from '@mui/icons-material';

/* ui-elements */
import { ListItemsLink } from 'components/ui-elements/Link/ListItemsLink';

export const MainMenuListItems = () => {
  const [open, setOpen] = React.useState(false);

  return(
    <React.Fragment>
      <List component="div" disablePadding>
        <ListItemsLink href="/">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="TOPPAGE" />
          </ListItemButton>
        </ListItemsLink>
      </List>
    </React.Fragment>
  );
};
