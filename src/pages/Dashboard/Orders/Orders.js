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
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    const [changeStatus, setChangeStatus] = useState([]);

  //display orders
    useEffect(() =>{
        fetch('https://murmuring-fjord-09510.herokuapp.com/addNewOrder/onerOrders')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data);
        })
    },[]);

    //delete user
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
//status change
    const handleStatusChange =(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value);
        const newLoginData = {...changeStatus};
        newLoginData[field] = value;
        setChangeStatus(newLoginData);
    }
   
    const handleStatusUpdate = id => {
        const statusChange ={
            ...changeStatus
        }
        fetch(`https://murmuring-fjord-09510.herokuapp.com/addNewOrder/statusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(statusChange),
        })
       .then((res) => res.json())
       .then((result) => console.log(result));
      };

    return (
        <div>
            {user?.email && <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell >Email</TableCell>
                        <TableCell>Orders Product Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
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
                        <TableCell component="th" scope="row">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth onChange={handleStatusUpdate}>
                                    <Select
                                    id="demo-simple-select"
                                    onClick={handleStatusChange}
                                    >
                                    <MenuItem value="Pending" >Pending</MenuItem>
                                    <MenuItem value="Shippment">Shippment</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </TableCell>
                        <TableCell component="th" scope="row"><Button onClick={()=>handleDeleteUser(row._id)} sx={{backgroundColor:'red', color:'white', px:5}}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </div>
    );
};

export default Orders;