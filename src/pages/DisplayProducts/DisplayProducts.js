import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './DisplayProduct.css';

const DisplayProducts = (props) => {
    const{key,name,number,description,link}=props.product;
    return (
        <div className="card-design">
            <div>
                <img className="img-design" src={link} alt="" />
            </div>
            <div className="card-body">
            <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main' , fontWeight: 600}}>
                {name}
            </Typography> 
            <Typography variant="h6" gutterBottom component="div">
                price: {number}
            </Typography> 
            <Typography variant="caption" display="block" gutterBottom>
                Description: {description}
            </Typography> 
            <Link to={`/showProduct/${key}`}>
                <Button sx={{px: 5}} variant="contained">Order</Button>
            </Link>
            </div>
        </div>
    );
};

export default DisplayProducts;