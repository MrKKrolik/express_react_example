import React, { useContext, useEffect, useState, Fragment } from 'react'
import Table from 'react-bootstrap/Table' 
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {Container, Form, Row, Col}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { fetchUsers, createUser, updateUser, deleteUser } from '../http/fetchUsers'
import { fetchGroups } from '../http/fetchGroups'
import ReadOnlyUserRow from './ReadOnlyUserRow'
import EditableUserRow from './EditableUserRow'


const UserTable = observer(() => {
    const {users} = useContext(Context)
    const {groups} = useContext(Context)
    const [showAddUser, setShowAddUser] = useState(false)
    const [editUserId, setEditUserId] = useState(null)
    const [editUserValue, setEditUserValue] = useState({
        user_id: "",
        username: "",
        group: ""
    }); 
    let [_users, setUsers] = useState(users.users)
    let [_groups, setGroups] = useState(groups.groups)
    useEffect(() => {
        fetchUsers().then(data => {
            users.setUsers(data)
            setUsers(users.users)
        }).catch(error => console.erro(error))
    }, [_users])

    useEffect(() => {
        fetchGroups().then(data => {
            groups.setGroups(data)
            setGroups(groups.groups)
        }).catch(error => console.erro(error))
        
    }, [_groups])

    const onSubmit = (event) => {
        // event.preventDefault()
        let username = event.target.userNameInput.value;
        let group_id = event.target.selectGroup.value;
        createUser({username, group_id}).then()
        .catch(err => console.error(err))
    }
    
    const getGroupName = (id, groups) => {
        
    }

    const onEdit = (event, user) => {
        event.preventDefault()
        setEditUserId(user.user_id)
        const formValues = {
            user_id: user.user_id,
            username: user.username,
            group_id: user.group_id,
            created: user.created
        }
        setEditUserValue(formValues)
    }

    const handleEidtUserChange = (event) => {
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        
        const newFormData = { ...editUserValue };
        newFormData[fieldName] = fieldValue;
        
        setEditUserValue(newFormData);
    };

    const onEditFormSave = (event, id) => {
        event.preventDefault();
        // console.log(editUserValue);
        updateUser(editUserValue.user_id, {username: editUserValue.username, group_id: editUserValue.group}).then()
        .catch(err => console.error(err))
        fetchUsers().then(data => {
            users.setUsers(data)
            setUsers(users.users)
        }).catch(err => console.erro(err))
        setEditUserId(null)
    }
    const onCancel = () => {
        setEditUserId(null)
    }
    const onDelete = (userId) => {
        deleteUser(userId).then()
        .catch(err => console.error(err))
        fetchUsers().then(data => {
            users.setUsers(data)
            setUsers(users.users)
        }).catch(err => console.erro(err))
    }
    const addUser = () => setShowAddUser(true)

    return (
        <Container>
        <Table responsive>
            <thead>
            <tr>
                <th>id</th>
                <th>UserName</th>
                <th>Group</th>
                <th>Created</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {_users.map((user) => (
                
                <Fragment>
                    { editUserId === user.user_id ?
                    (
                    <EditableUserRow
                        editUserValue={editUserValue}
                        handleEidtUserChange={handleEidtUserChange}
                        onEditFormSave={onEditFormSave}
                        onCancel={onCancel}
                    />   
                    ) : (
                    
                    <ReadOnlyUserRow
                        user={user}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                    )
                    }
                </Fragment>
                ))
            }
            </tbody>
            </Table>
        {!showAddUser ?
            <Button variant="outline-primary" onClick={addUser}>
                Add User
            </Button> : null}
        {
        showAddUser ?
        <Form onSubmit={onSubmit} id="addUserForm">
            <Row className="mb-3">
                <Col>
                    <Form.Control 
                        className="mb-2"
                        required
                        id="userNameInput"
                        placeholder="Name"
                    />
                </Col>
                <Col>
                    <Form.Select 
                        id="selectGroup"
                    >
                        {_groups.map(group => {
                            return (<option key={group.group_id} value={group.group_id}>{group.name}</option>)
                        })}
                    </Form.Select>
                </Col>
                <Col xs="auto">
                    <Button variant="outline-primary" type="submit">Submit</Button>{' '}        
                </Col>  
            </Row>
        </Form> : null
        }
        </Container>
    )
});
export default UserTable;