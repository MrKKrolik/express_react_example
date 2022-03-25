import axios from "axios";

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const fetchGroups = async () => {
    const {data} = await host.get('groups')
    return data
}

export const createGroup = async (group) => {
    const {data} = await host.post('groups', group)
    return data
}

export const updateGroup = async (id, group) => {
    const {data} = await host.put('groups/' + id, group)
    return data
}

export const deleteGroup = async (id) => {
    const {data} = await host.delete('groups/' + id)
    return data
}