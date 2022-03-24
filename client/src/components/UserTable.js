import React, { useContext, useEffect, useMemo, useState } from 'react'
import Table from 'react-bootstrap/Table' 
import {useTable} from "react-table"
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { UserColumns } from './UserColumns'
import {Container}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { fetchUsers } from '../http/fethhUsers'
const UserTable = observer(() => {
    const {users} = useContext(Context)
    let [_users, setUsers] = useState(users.users)
    useEffect(() => {
        fetchUsers().then(data => {
            users.setUsers(data)
            setUsers(users.users)
        }).catch(error => console.erro(error))
    }, [])
    // console.log("Users", users.users);
    return (
        <Container>
            <Table responsive>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>created</th>
                    <th>group</th>
                </tr>
                </thead>
                <tbody>
                {
                    _users.map((user) => (
                        <tr>
                            <td>{user.user_id}</td>
                            <td>{user.username}</td>
                            <td>{user.created}</td>
                            <td>{user.group_id}</td>
                            <td>
                                <Button variant="outline-primary">
                                    Edit
                                </Button>{' '}
                                <Button variant="outline-danger">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <Button variant="outline-primary">Add User</Button>
        </Container>
    )
});
export default UserTable;