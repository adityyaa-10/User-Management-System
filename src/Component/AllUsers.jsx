import { Table, TableRow, TableHead, TableCell } from '@mui/material'

const AllUsers = () => {
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