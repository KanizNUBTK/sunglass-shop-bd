import React from 'react';
import Grid from '@mui/material/Grid';
import { Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';

const ShopGallery = () => {
    return (
        <Container sx={{pb:5,mb:5 ,boxShadow: 1}}>
            <Typography variant="h4" sx={{ my:5,py:5, textAlign:'center' ,fontWeight: 600}} gutterBottom component="div">
                Our Products
            </Typography>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={12} md={6} sx={{p:5}}>
                    <Grid>
                    <Typography variant="h6" sx={{fontWeight: 600,boxShadow: 1, p:3}} gutterBottom component="div">
                        First Floor Inner Look Of Our Shop
                    </Typography>
                    </Grid>
                    <Grid>
                        <img style={{width: '99%'}} src={img1} alt="" />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{p:5 }}>
                <Grid>
                    <Grid>
                        <img style={{width: '99%'}} src={img2} alt="" />
                    </Grid>
                    <Typography variant="h6" sx={{fontWeight: 600,boxShadow: 1, p:3}} gutterBottom component="div">
                        Second Floor Inner Look Of Our Shop
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShopGallery;