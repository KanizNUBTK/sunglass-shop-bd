import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../hook/useAuth';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const {user,logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sunglass ShopBD
                </Typography>
                <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>
                <Link to="/ourProduct" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Our Product</Button></Link>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Dashboard</Button></Link>
                {user.email && <span style={{ padding:'10px', color: 'white' }}>{user.displayName} </span>}
                {
                        user?.email ?
                            <Button onClick={logout} color="inherit">Logout</Button>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;