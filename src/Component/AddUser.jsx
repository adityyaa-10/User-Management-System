import { useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from '@mui/material'
import { addUser } from '../service/api'

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;  
`
const EachInput = styled(FormControl)`
    margin-top: 50px;
`

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}



const AddUser = () => {
    const [user, setUser] = useState(defaultValue)

    const onValueChage = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
    }

    return (
        <Container>
            <FormGroup>
                <Typography variant='h4'>Add User</Typography>
                <EachInput>
                    <InputLabel>
                        Name
                    </InputLabel>
                    <Input onChange={(e) => onValueChage(e)} name='name' />
                </EachInput>
                <EachInput>
                    <InputLabel>
                        Usename
                    </InputLabel>
                    <Input onChange={(e) => onValueChage(e)} name='username' />
                </EachInput>
                <EachInput>
                    <InputLabel>
                        Email
                    </InputLabel>
                    <Input onChange={(e) => onValueChage(e)} name='email' />
                </EachInput>
                <EachInput>
                    <InputLabel>
                        Phone
                    </InputLabel>
                    <Input onChange={(e) => onValueChage(e)} name='phone' />
                </EachInput>
                <EachInput>
                    <Button onClick={addUserDetails} variant="contained">Add User</Button>
                </EachInput>
            </FormGroup>
        </Container>
    )
}

export default AddUser
