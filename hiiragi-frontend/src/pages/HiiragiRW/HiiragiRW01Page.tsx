/* mui5 */
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

/* mui5(icons) */

/* mui5(styles) */
import { ThemeProvider } from '@mui/material/styles';

/* common/hooks */
import { useDrawerOpen } from 'common/hooks/useDrawerOpen';

/* ui-elements */
import { AppBar } from 'components/ui-elements/AppBar/AppBar';
import { mdTheme } from 'components/ui-elements/Theme/MDTheme';

/* ui-parts */
import HomeAppBar from 'components/ui-parts/HomeAppBar/HomeAppBar';
import HomeDrawer from 'components/ui-parts/HomeDrawer/HomeDrawer';
import {
  HiiragiRW01
} from 'components/ui-parts/HiiragiRW01/HiiragiRW01';

export function HiiragiRW01Page() {
  const {open} = useDrawerOpen();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ bgcolor: '#3949ab'}}>
          <HomeAppBar />
        </AppBar>
        <HomeDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <HiiragiRW01 />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
