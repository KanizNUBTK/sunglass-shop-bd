import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Alert } from '@mui/material';

const AddReview = () => {
    const {user} = useAuth();
    const [review, setReview] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleOnBlur =e=>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value);
        const newLoginData = {...review};
        newLoginData[field] = value;
        setReview(newLoginData);
    }
    const handleProductSubmit = () =>{
        const reviews ={
            ...review,
            email: user?.email,

        }
        // console.log(product.name, product.price,product.link, product.description);
        fetch("https://murmuring-fjord-09510.herokuapp.com/addreview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviews),
          })
            .then((res) => res.json())
            .then((result) => 
                {if(result.modifiedCount){
                console.log(result);
                setSuccess(true);}
            });
    }
    return (
        <div>
            <h1>Review...</h1>
            <div onClick={handleProductSubmit}>
            <TextField 
            sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            name="email"
            type="email"
            defaultValue={user.email}
            onBlur={handleOnBlur}
            variant="outlined" />
            <TextField 
            sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            label="Review" 
            type="text"
            name="review"
            onBlur={handleOnBlur}
            variant="outlined" />
            <TextField 
            sx={{my: 1}} 
            fullWidth id="outlined-basic" 
            label="Plase Give us rateing(0/1/2/3/4/5)" 
            type="number"
            name="rating"
            onBlur={handleOnBlur}
            variant="outlined" />
            <Button sx={{ width: '100%', m: 1 }} type="submit" variant="contained">Send Review</Button>
            </div>
            {success && <Alert severity="success">Review uploaded successfully!</Alert>}
        </div>
    );
};

export default AddReview;