import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        nabItemMD: {
            color: 'white',
            textDecoration: 'none',
        },
        nabItem: {
            color: 'black',
            textDecoration: 'none',
        },
        navIcon: {
            color: 'black',
            [theme.breakpoints.up('sm')]: {
                display: 'none!important',
            },
        },
        navContainer: {
            width: '40%',
            display: 'inline-flex',
            [theme.breakpoints.down('sm')]: {
                display: 'none!important',
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right',
            },
        },
        mobileNavItem: {
            backgroundColor: 'white',
        }
    })
    const { nabItemMD, nabItem, navIcon, navContainer, navLogo, mobileNavItem } = useStyle();
    //drawer style
    const [state, setState] = React.useState(false);
    const list = (
        <Box
            sx={{ width: 200 }}
            role="presentation"
            className={mobileNavItem}
        >
            <List>
                <ListItem button>
                    <ListItemText ><Link className={nabItem} to="/home">Home</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText ><Link className={nabItem} to="/ourProduct">Our Product</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><Link to="/dashboard" className={nabItem}>Dashboard</Link></ListItemText>
                </ListItem>
                <Divider />
                {user.email && <span style={{  padding: '10px', color: 'black' }}>{user.displayName} </span>}
                {
                    user?.email ?
                        <Button onClick={logout} color="inherit">Logout</Button>
                        :
                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                            <Button sx={{ color: 'black' }}>Login</Button>
                        </NavLink>
                }
            </List>
        </Box>
    );


    return (
        <div>
            <Box sx={{ flexGrow: 1 ,width: { xs: 380, sm: 500, md: '100%' } }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            //   sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }} id='text-Color'>
                            Hello Health Lovers
                        </Typography>
                        <Box className={navContainer}>
                            <Link to="/home" className={nabItemMD} ><Button color="inherit">Home</Button></Link>
                            <Link to="/ourProduct" className={nabItemMD} ><Button color="inherit">Our Product</Button></Link>
                            <Link to="/dashboard" className={nabItemMD}><Button color="inherit">Dashboard</Button></Link>
                            {user.email && <span style={{marginTop:'-5px',textTransform: "capitalize",fontWeight:"bold", padding: '10px' }}>{user.displayName} </span>}
                            {
                                user?.email ?
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                    :
                                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                                        <Button color="inherit" style={{ color:'white' }}>Login</Button>
                                    </NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </div>
    );
};

export default Navbar;