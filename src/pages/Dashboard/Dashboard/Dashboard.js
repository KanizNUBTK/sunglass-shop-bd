import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import ViewOrders from '../ViewOrders/ViewOrders';
import Payment from '../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import Orders from '../Orders/Orders';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import useAuth from '../../../hook/useAuth';
import { NavLink} from 'react-router-dom';
import './Dashboard.css';

const drawerWidth = 200;

const Dashboard = (props) => {
  const {user,logout,admin} = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    //const {admin} = useAuth();
   
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
            <Link to="/ourProduct" style={{ textDecoration: 'none', color: 'black' }}>
                <Button color="inherit">Our Products</Button>
            </Link>
            <Link to={`${url}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Button color="inherit">Dashboard Home</Button>
            </Link>
            <br />
            <Link to={`${url}/addReview`} style={{ textDecoration: 'none', color: 'black' }}>
                <Button color="inherit">Review</Button>
            </Link>
            <br />
            <Link to={`${url}/payment`} style={{ textDecoration: 'none', color: 'black' }}>
                <Button color="inherit">payment</Button>
            </Link>
            <br />
            {admin && <Box>
                <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Button color="inherit">Make Admin</Button>
                </Link>
                <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Button color="inherit">Add Product</Button>
                </Link>
                <Link to={`${url}/orders`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Button color="inherit">Orders list</Button>
                </Link>
              </Box>
            }
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
                <Button color="inherit">Back to Home</Button>
            </Link>
            
        </List>
        <div className="logout-bar">
            {user.email && <span style={{ padding:'10px', color: 'black' }}>{user.displayName} </span>}
            {
                user?.email ?
                <Button onClick={logout} color="inherit">Logout</Button>
                :
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                    <Button color="inherit">Login</Button>
                </NavLink>
            }
          </div>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              DashBoard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>
            <Route path={`${path}/viewOrder`}>
              <ViewOrders></ViewOrders>
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/orders`}>
              <Orders></Orders>
            </Route>
          </Switch>
          
        </Box>
      </Box>
    );           
  }
  
  Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;