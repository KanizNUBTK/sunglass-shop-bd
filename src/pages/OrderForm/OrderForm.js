import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../hook/useAuth';
import { useState } from 'react';

const OrderForm = () => {
    const [product,setProduct]=useState([]);
    const { user } = useAuth();

    const handleOnBlur =e=>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value);
        const newLoginData = {...product};
        newLoginData[field] = value;
        setProduct(newLoginData);
    }
    const handleProductOrderSubmit = e =>{
        const products ={
            ...product,
            email: user?.email,
            status :"pending"
        }
        console.log(product.name, product.price,user.email);
        fetch("https://murmuring-fjord-09510.herokuapp.com/addNewOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => console.log(products));
    }
    return (
        <>
            <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' , my:5,fontWeight: 600}}>
                 Are You Want to Place Order?Please Submit form...
            </Typography>
            <form onSubmit={handleProductOrderSubmit}>
                <TextField 
                sx={{my: 1}} 
                fullWidth id="outlined-basic" 
                label="Enter The Product Name" 
                name="name"
                onBlur={handleOnBlur}
                size="small" />
                <TextField 
                label="Enter The Product Price"
                name="price"
                type="number"
                onBlur={handleOnBlur}
                variant="outlined" />
                <TextField sx={{my: 1}} 
                fullWidth id="outlined-basic" 
                name="email"
                defaultValue={user.email}
                onBlur={handleOnBlur}
                variant="outlined" />
                <Button sx={{ width: '100%', m: 1 }} type="submit" variant="contained">Order</Button>
            </form>
        </>
    );
};

export default OrderForm;