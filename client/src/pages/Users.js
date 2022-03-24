import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../index';
import UserTable from '../components/UserTable';
import { fetchUsers } from '../http/fethhUsers';
import { useParams } from 'react-router-dom';
const Users = () => {
    const params = useParams()
    console.log(`params: ${params}`);
    const {users} = useContext(Context)
    useEffect(() => {
        fetchUsers().then(data => users.setUsers(data)).catch(error => console.error(error))
    }, [])
    return (
        <UserTable/>        
    );
};

export default Users;