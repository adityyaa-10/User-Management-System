import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers } from '../service/api';
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

    useEffect(() => {
        getAllUsers();
    }, []);

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" >Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;