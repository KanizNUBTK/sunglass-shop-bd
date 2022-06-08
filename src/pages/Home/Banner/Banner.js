import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div className='appointmentBg'>
            <Box sx={{ flexGrow: 1, width: { xs: 400, sm: 500, md: '100%' } }}>
                <Grid container spacing={2} className='grid-padding' sx={{ width: { xs: 300, sm: 400, md: '100%' } }}>
                    <Grid item xs={12} md={8} >
                        <Box >
                            <h2 className='headerText'>
                                Sunglass ShopBD
                            </h2>
                            <Link to="/ourProduct" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" style={{ padding: '5px 30px', fontSize: '20px', backgroundColor: 'rgb(129, 129, 236)' }}>explore</Button>
                            </Link>

                        </Box>
                        <Grid item xs={12} md={4}>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Banner;