import axios from "axios";

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const fetchUsers = async () => {
    const {data} = await host.get('users')
    return data
}

export const createUser = async (user) => {
    const {data} = await host.post('users', user)
    return data
}

export const updateUser = async (id, user) => {
    // console.log(user,id)
    const {data} = await host.put('users/' + id, user)
    return data
}

export const deleteUser = async (id) => {
    const {data} = await host.delete('users/' + id)
    return data
}