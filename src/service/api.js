import axios from 'axios'

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (err) {
        console.log(`Error while calling Add User API`, err);
    }
}

