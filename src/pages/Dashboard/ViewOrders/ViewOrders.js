import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import useAuth from '../../../hook/useAuth';
import { Button } from '@mui/material';

const ViewOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    useEffect(() =>{
        const url =`https://murmuring-fjord-09510.herokuapp.com/addNewOrder?email=${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data);
        })
    },[]);

    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are sure you want to delete the customer?');
        if(proceed){
         const url = `https://murmuring-fjord-09510.herokuapp.com/addNewOrder/${id}`;
         fetch(url,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount > 0){
                 alert('Delete successfully');
                 const remainingusers = orders.filter(order => order._id !== id);
                 setOrders(remainingusers);
             }
         })
        }
     }

    return (
        <div>
            <h1>view cusmoter order</h1>
            <TableContainer sx={{width:{xs:300,sm:400, md:'100%'}}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow sx={{width:{xs:100,sm:200}}}>
                        <TableCell >Email</TableCell>
                        <TableCell>Orders Product Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody sx={{width:{xs:100,sm:200}}}>
                    {orders.map((row,index) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row?.email}
                        </TableCell>
                        <TableCell component="th" scope="row">{row?.name}</TableCell>
                        <TableCell component="th" scope="row">{row?.price}</TableCell>
                        <TableCell component="th" scope="row">{row?.status}</TableCell>
                        <TableCell component="th" scope="row"><Button onClick={()=>handleDeleteUser(row._id)} sx={{backgroundColor:'red', color:'white', px:5}}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
};

export default ViewOrders;