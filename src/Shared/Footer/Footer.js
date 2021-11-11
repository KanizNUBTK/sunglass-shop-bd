import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container} from '@mui/material';
import logo from '../../images/logo.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'info.main', py:5 }}>
            <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={4} md={4}>
                <img src={logo} alt="" />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                <Typography variant="h5" gutterBottom component="div" sx={{ color: 'white' , fontWeight: 600}}>
                    Sunglass ShopBD
                </Typography> 
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: 'white' , fontWeight: 400}}>
                    KDA, New Market
                    <br />Khulna-9100,
                    <br />Bangladesh
                </Typography> 
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link> <br />
                <Link to="/ourProduct" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Our Product</Button></Link><br />
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Dashboard</Button></Link>
                </Grid>
            </Grid>
        </Container>
      </Box>
    );
};

export default Footer;