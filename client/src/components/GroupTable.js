import React, { useContext, useEffect, useState, Fragment } from 'react'
import Table from 'react-bootstrap/Table' 
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {Container, Form, Row, Col}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { fetchGroups, createGroup, updateGroup, deleteGroup } from '../http/fetchGroups'
import ReadOnlyGroupRow from './ReadOnlyGroupRow'
import EditableGroupRow from './EditableGroupRow'


const GroupTable = observer(() => {
    const {groups} = useContext(Context)
    const [showAddGroup, setShowAddGroup] = useState(false)
    const [editGroupId, setEditGroupId] = useState(null)
    const [editGroupValue, setEidtGroupValue] = useState({
        group_id: "",
        name: "",
        description: ""
    }); 
    let [_groups, setGroups] = useState(groups.groups)
    useEffect(() => {
        fetchGroups().then(data => {
            groups.setGroups(data)
            setGroups(groups.groups)
        }).catch(error => console.erro(error))
    }, [_groups])
    
    const onSubmit = (event) => {
        let name = event.target.groupNameInput.value;
        let description = event.target.groupDescriptionInput.value;
        // e.preventDefault()
        createGroup({name, description}).then()
        .catch(err => console.error(err))
    }

    const onEdit = (event, group) => {
        event.preventDefault()
        setEditGroupId(group.group_id)
        const formValues = {
            group_id: group.group_id,
            name: group.name,
            description: group.description
        }
        setEidtGroupValue(formValues)
      
    }

    const handleEidtGroupChange = (event) => {
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editGroupValue };
        newFormData[fieldName] = fieldValue;
    
        setEidtGroupValue(newFormData);
    };

    const onEditFormSave = (event, id) => {
        event.preventDefault();
        // console.log(editGroupValue);
        updateGroup(editGroupValue.group_id, {name: editGroupValue.name, description: editGroupValue.description}).then()
        .catch(err => console.error(err))
        fetchGroups().then(data => {
            groups.setGroups(data)
            setGroups(groups.groups)
        }).catch(err => console.erro(err))
        setEditGroupId(null)
    }
    const onCancel = () => {
        setEditGroupId(null)
    }
    const onDelete = (groupId) => {
        deleteGroup(groupId).then()
        .catch(err => console.error(err))
        fetchGroups().then(data => {
            groups.setGroups(data)
            setGroups(groups.groups)
        }).catch(err => console.erro(err))
    }
    const addGroup = () => setShowAddGroup(true)

    return (
        <Container>
        <Table responsive>
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {_groups.map((group) => (
                <Fragment>
                    { editGroupId === group.group_id ?
                    (
                    <EditableGroupRow 
                        editGroupValue={editGroupValue}
                        handleEidtGroupChange={handleEidtGroupChange}
                        onEditFormSave={onEditFormSave}
                        onCancel={onCancel}
                    />   
                    ) : (
                    <ReadOnlyGroupRow
                        group={group}
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
        {!showAddGroup ?
            <Button variant="outline-primary" onClick={addGroup}>
                Add Group
            </Button> : null}
        {
        showAddGroup ?
        <Form onSubmit={onSubmit} id="addGroupForm">
            <Row className="mb-3">
                <Col>
                    <Form.Control 
                        className="mb-2"
                        required
                        id="groupNameInput"
                        placeholder="Name"
                    />
                </Col>
                <Col>
                    <Form.Control 
                        className="mb-2"
                        id="groupDescriptionInput"
                        placeholder="Description"
                    />
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
export default GroupTable;