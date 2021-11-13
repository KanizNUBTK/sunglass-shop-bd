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
import './Navbar.css';

const Navbar = () => {
    const {user,logout} = useAuth();
    return (
        <>
            <div className="menu-bg">
                <h3 >Sunglass ShopBd</h3>  
                    <div className="menu-content">
                            <Link style={{marginRight:'10px', textDecoration: 'none', color: 'white' }} to="/home">Home</Link>
                            <Link style={{marginRight:'10px', textDecoration: 'none', color: 'white' }} to="/ourProduct">Our Product</Link>
                            <Link style={{marginRight:'10px', textDecoration: 'none', color: 'white' }} to="/dashboard">Dashboard</Link>
                            
                                {user.email && <span style={{ color: 'white' }}>{user.displayName} </span>}
                                {
                                    user.email?
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                                }
                    </div>
            </div>
            <div className="header">
                <Box sx={{ flexGrow: 1, width:{xs: 400, sm: 450, md:'100%'}}}>
                    <AppBar position="static">
                        <Toolbar>
                        
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
            </div>
         </>
    );
};

export default Navbar;