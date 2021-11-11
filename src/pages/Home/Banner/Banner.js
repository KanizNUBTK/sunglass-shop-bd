import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bg from '../../../images/banner1.jpg';
import { Link } from 'react-router-dom';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(128, 128, 160, 0.11)',
    backgroundBlendMode: 'darken, luminosity',
    padding: 110,
}


const Banner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start',
                    alignItems: 'center', 
                    }}>
                    <Box >
                        <Typography variant ="h2" sx={{my: 5}} style={{fontWeight:' bold', fontSize: '40px'}}>
                            Sunglass ShopBD
                        </Typography>
                        <Link to="/ourProduct" style={{textDecoration:'none'}}>
                        <Button  variant="contained" style={{padding:'5px 30px', fontSize:'20px', backgroundColor: 'rgb(129, 129, 236)'}}>explore</Button>
                        </Link>
                        
                    </Box>
                    <Grid item xs={12} md={4}>
                </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;