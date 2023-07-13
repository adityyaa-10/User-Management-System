import { useEffect, useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
`;

const EachInput = styled(FormControl)`
        margin-top: 50px;
`

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}



const EditUser = () => {
    const [user, setUser] = useState(defaultValue);

    let navigate = useNavigate();
    const { id } = useParams();

    const loadUserDetails = async () => {
        const response = await getUser(id)
        setUser(response.data)
    }
    useEffect(() => {
        loadUserDetails()
    },)

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <EachInput>
                <InputLabel>Name</InputLabel>
                <Input name='name' value={user.name} onChange={(e) => onValueChange(e)}  />
            </EachInput>
            <EachInput>
                <InputLabel>Username</InputLabel>
                <Input name='username' value={user.username} onChange={(e) => onValueChange(e)}  />
            </EachInput>
            <EachInput>
                <InputLabel>Email</InputLabel>
                <Input name='email' value={user.email} onChange={(e) => onValueChange(e)}  />
            </EachInput>
            <EachInput>
                <InputLabel>Phone</InputLabel>
                <Input name='phone' value={user.phone} onChange={(e) => onValueChange(e)}  />
            </EachInput>
            <EachInput>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User Details</Button>
            </EachInput>
        </Container>
    )
}

export default EditUser;