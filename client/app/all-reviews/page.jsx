"use client";
import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
// import { getUsers, deleteUser } from '../Service/api';
import { apiAllReviews } from '../api/apiAllReview/route';
//import { apiAddReviews } from '../api/apiAddReview/route';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    const user = {
        _id : 45,
        name : "Yam",
        email : "yam@gmail.com",
        phone : "3893893003"
    }
    
    useEffect(() => {
        getAllReviews();
    }, []);

    // Empty Array in useEffect means component-did-mount

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }

    const getAllReviews = async () => {
        console.log("in the getallreviews func.");
        await apiAllReviews();
        // await apiAddReviews(review);
    
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                  
                    <TableCell>Email</TableCell>
                    <TableCell>Review</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        {/* <TableCell>{user.username}</TableCell> */}
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                            <button onClick={() => getAllReviews()}>Sub</button>
                        </TableCell>
                    </TRow>
                ))}
                
            </TableBody>
        </StyledTable>
        
    )
}

export default AllUsers;