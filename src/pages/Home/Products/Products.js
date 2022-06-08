import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SingleProduct from '../SingleProduct/SingleProduct';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import  Box from '@mui/material/Box'; 
import './Product.css'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-fjord-09510.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllProducts(data);
            })
    }, [])
    const pro = allProducts.slice(0, 4)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ my: 5, pb: 5, boxShadow: 1 }}>
                <h1 className='productHeader'>
                    Our Products
                </h1>
                <div >
                    <Grid container spacing={{ md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }}>
                        {
                            pro.map(product =>
                                <Grid item xs={12} md={3} sx={{ p: 2 }}>
                                    <SingleProduct
                                        key={product.key}
                                        product={product}
                                    ></SingleProduct>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </Container>
        </Box>
    );
};

export default Products;