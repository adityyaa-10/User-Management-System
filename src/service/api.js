import axios from 'axios'

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (err) {
        console.log(`Error while calling Add User API`, err);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`)
    } catch (err) {
        console.log('Error While calling getUsers API', err);
    }
}


export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (err) {
        console.log('Error While calling getUsers API', err);
    }
}


export const editUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (err) {
        console.log('Error While calling editUser API', err);
    }
}
