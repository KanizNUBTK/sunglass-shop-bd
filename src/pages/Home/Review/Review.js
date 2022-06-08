import React, { useEffect } from 'react';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Review = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-fjord-09510.herokuapp.com/addreview')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data);
            })
    }, []);
    const rev = reviews.slice(0, 6)

    return (
        <>
            <div>
                <Container sx={{ my: 5, py: 5, boxShadow: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color:'#1976D2',mb: 4 }} gutterBottom component="div">
                        Customer reviews...
                    </Typography>
                    <Grid container>
                        {
                            rev?.map(rt => (
                                <Grid item xs={12} md={3} sx={{ p: 1 }}>
                                    <Box sx={{ boxShadow: 1, p: 2 }}>
                                        <Typography variant="subtitle1">
                                            {rt.name}
                                        </Typography>
                                        <Typography variant="caption">
                                            {rt.email}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            {rt.review}
                                        </Typography>
                                        <Rating name="size-medium" defaultValue={rt.rating}></Rating>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default Review;