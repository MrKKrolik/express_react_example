import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../index';
import { fetchGroups } from '../http/fetchGroups';
import GroupTable from '../components/GroupTable';

const Groups = () => {
    const params = useParams()
    console.log(`params: ${params}`);
    const {groups} = useContext(Context)
    useEffect(() => {
        fetchGroups().then(data => groups.setGroups(data)).catch(error => console.error(error))
    }, [])
    return (
        <GroupTable/>        
    );
};

export default Groups;