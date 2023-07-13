import { useEffect } from 'react'
import { Table, TableRow, TableHead, TableCell } from '@mui/material'
import { getUsers } from '../service/api.js'

const AllUsers = () => {

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        await getUsers()
    }

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>

                    </TableRow>
                </TableHead>
            </Table>
        </>
    )
}

export default AllUsers