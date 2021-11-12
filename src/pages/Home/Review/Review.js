import React, { useEffect } from 'react';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Review = () => {
    const [reviews, setReview]=useState({});

    useEffect(() =>{
        fetch('https://murmuring-fjord-09510.herokuapp.com/addreview')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReview(data);
        })
    },[]);

    return (
        <>
           <div>
            {
                reviews?.map(rt=>(
                    <Container sx={{my:5,py:5,boxShadow: 3}}>
                        <Typography variant="h4" sx={{ my:5, fontWeight: 600}} gutterBottom component="div">
                            Customer reviews...
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            {rt.email}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            {rt.review}
                        </Typography>
                        <Rating name="size-medium" defaultValue={rt.rating}></Rating>
                    </Container>
                    ))
            }       
            </div>
        </>
    );
};

export default Review;