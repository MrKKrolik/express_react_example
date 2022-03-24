import React, { useContext, useEffect, useMemo, useState } from 'react'
import Table from 'react-bootstrap/Table' 
import {useTable} from "react-table"
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { GroupColumns } from './GroupColumns'
import {Container}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { fetchGroups } from '../http/fetchGroups'

const GroupTable = observer(() => {
    const {groups} = useContext(Context)
    let [_groups, setGroups] = useState(groups.groups)
    useEffect(() => {
        fetchGroups().then(data => {
            groups.setGroups(data)
            setGroups(groups.groups)
        }).catch(error => console.erro(error))
    }, [])
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
            {_groups.map((group) => (
                    <tr>
                        <td>{group.group_id}</td>
                        <td>{group.name}</td>
                        <td>{group.description}</td>
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
        <Button variant="outline-primary">Add Group</Button>{' '}
        </Container>
    )
});
export default GroupTable;