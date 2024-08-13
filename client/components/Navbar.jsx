import dynamic from 'next/dynamic';
import { AppBar, Toolbar } from '@mui/material';

const ClientSideNav = dynamic(() => import('./ClientSideNav'), {
  ssr: false,
});

const NavBar = () => {
  return (
    <AppBar position="static" style={{ background: '#111111' }}>
      <Toolbar>
        <ClientSideNav />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;