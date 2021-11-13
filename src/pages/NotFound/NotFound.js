import React from 'react';
import notFound from '../../images/notFound.jpg';
import './NotFpund.css';
import Box from '@mui/material/Box';

const NotFound = () => {
    return (
        <Box sx={{p:5}}>
            <img className="notfound-img" src={notFound} alt="" />
        </Box>
    );
};

export default NotFound;