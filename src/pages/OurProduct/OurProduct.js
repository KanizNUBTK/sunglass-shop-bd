import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import { Container} from '@mui/material';
import './OurProduct.css';

const OurProduct = () => {
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
        <>
            <Navbar></Navbar>
            <Container>
                <div className="card">    
                    {
                        allProducts.map(product=><DisplayProducts
                        key={product.key}
                        product={product}
                        ></DisplayProducts>)
                    }      
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default OurProduct;