import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
`;

const EachInput = styled(FormControl)`
        margin-top: 50px;
`

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    // const { name, username, email, phone } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <EachInput>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' />
            </EachInput>
            <EachInput>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' />
            </EachInput>
            <EachInput>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' />
            </EachInput>
            <EachInput>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' />
            </EachInput>
            <EachInput>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </EachInput>
        </Container>
    )
}

export default AddUser;