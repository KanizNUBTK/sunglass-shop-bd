import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import SingleProduct from '../SingleProduct/SingleProduct';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
        <div>
            <Container sx={{ my: 5, pb: 5, boxShadow: 1 }}>
                <Typography variant="h4" sx={{ my: 5, color:'#1976D2',textAlign: 'center', fontWeight: 600 }} gutterBottom component="div">
                    Our Products
                </Typography>
                {/* <div className="card"> */}
                <Grid container>
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
                {/* </div> */}
            </Container>
        </div>
    );
};

export default Products;