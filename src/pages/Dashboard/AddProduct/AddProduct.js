import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hook/useAuth';
import { Alert } from '@mui/material';

const AddProduct = () => {
    const {user} = useAuth();
    const [product, setProduct] = useState([]);
    const [success, setSuccess] = useState(false);
    
    const handleOnBlur =e=>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value);
        const newLoginData = {...product};
        newLoginData[field] = value;
        setProduct(newLoginData);
    }
    const handleProductSubmit = () =>{
        const products ={
            ...product,

        }
        // console.log(product.name, product.price,product.link, product.description);
        fetch("https://murmuring-fjord-09510.herokuapp.com/addproduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => {
                console.log(products);
                setProduct('');
                setSuccess(true);
            });
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleProductSubmit}>
            <TextField 
            sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            label="Product key" 
            type="number"
            name="key"
            onBlur={handleOnBlur}
            variant="outlined" />
            <TextField 
            sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            label="Name" 
            name="name"
            onBlur={handleOnBlur}
            variant="outlined" />
            <TextField 
            sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            label="Price" 
            type="number"
            name="number"
            onBlur={handleOnBlur}
            variant="outlined" />
            <TextField sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            label="Image Link" 
            type="text"
            name="link"
            onBlur={handleOnBlur}
            variant="outlined" />
            <TextField 
            sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            label="Description" 
            type="text"
            name="description"
            onBlur={handleOnBlur}
            variant="outlined" />
            <Button sx={{ width: '100%', m: 1 }} type="submit" variant="contained">Upload</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
           
        </div>
    );
};

export default AddProduct;