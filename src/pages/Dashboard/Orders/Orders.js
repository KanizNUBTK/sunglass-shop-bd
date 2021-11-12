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

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    useEffect(() =>{
        fetch('http://localhost:5000/addNewOrder')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data);
        })
    },[]);
    return (
        <div>
            {user?.email && <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell >Email</TableCell>
                        <TableCell>Orders Product Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
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
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </div>
    );
};

export default Orders;