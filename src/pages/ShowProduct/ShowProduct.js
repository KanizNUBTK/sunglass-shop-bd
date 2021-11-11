import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import OrderForm from '../OrderForm/OrderForm';

const ShowProduct = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    console.log(productId);
    useEffect(() => {
        fetch(`http://localhost:5000/addproduct`)
          .then((res) => res.json())
          .then((data) => {setProduct(data)});
      }, [productId]);
    const exactData = product.filter(pd=> pd.key == productId);
    console.log(exactData);
    
    return (
        <>
            <Navbar></Navbar>
            <Container>
                <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div>
                                <img style={{width:'200px', height:'250px'}} src={exactData[0]?.link} alt="" />
                                <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' , fontWeight: 600}}>
                                    Product name: {exactData[0]?.name}
                                </Typography>
                                <Typography variant="h5" display="block" gutterBottom>
                                    Price of product: {exactData[0]?.number}
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Price of description: {exactData[0]?.description}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <OrderForm></OrderForm>
                        </Grid>
                    </Grid>
                </Box>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ShowProduct;