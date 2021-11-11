import React, { useEffect, useState } from 'react';
import { Container} from '@mui/material';
import SingleProduct from '../SingleProduct/SingleProduct';
import Typography from '@mui/material/Typography';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/allProducts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setAllProducts(data);
        })
    },[])
    return (
        <div>
            <Container sx={{my:5 , pb:5,boxShadow: 1 }}>
            <Typography variant="h4" sx={{ my:5,py:5, textAlign:'center', fontWeight: 600}} gutterBottom component="div">
                Our Products
            </Typography>
                <div className="card">    
                    {
                        allProducts.map(product=><SingleProduct
                        key={product.key}
                        product={product}
                        ></SingleProduct>)
                    }      
                </div>
            </Container>
        </div>
    );
};

export default Products;