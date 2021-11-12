import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Box from '@mui/material/Box';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import { Container} from '@mui/material';
import './OurProduct.css';

const OurProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        fetch('https://murmuring-fjord-09510.herokuapp.com/allProducts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setAllProducts(data);
        })
    },[])
    return (
        <>
            <Navbar></Navbar>
            <Box sx={{width:{xs:400,sm:500, md:'100%'}}}>
                <Typography variant="h3" sx={{mt:5,textAlign:'center',fontWeight: 600, fontSize:{xs:'24px'}}} gutterBottom component="div">
                    Our Products
                </Typography>
                <Container sx={{pb:5}}>
                    <div className="card">    
                        {
                            allProducts.map(product=><DisplayProducts
                            key={product.key}
                            product={product}
                            ></DisplayProducts>)
                        }      
                    </div>
                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default OurProduct;