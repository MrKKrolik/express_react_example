import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Context } from "../index";
import { fetchGroups } from "../http/fetchGroups";
const EditableUserRow = ({ editUserValue, handleEidtUserChange, onEditFormSave, onCancel }) => {
  const {groups} = useContext(Context)
  return (
    <tr>
        <td>{editUserValue.user_id}</td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a username"
          name="username"
          value={editUserValue.username}
          onChange={handleEidtUserChange}
        ></input>
        </td>
        <td>
        <Form.Select
          name="group"
          
          onChange={handleEidtUserChange}
        >
          {groups.groups.map(group => {
              return (<option key={group.group_id} value={group.group_id}>{group.name}</option>)
          })}
        </Form.Select>
        </td>
        <td>{editUserValue.created}</td>
        <td>
            <Button variant="outline-primary" onClick={(event) => onEditFormSave(event, editUserValue.group_id)}>
                Save
            </Button>{' '}
            <Button variant="outline-danger" onClick={onCancel}>
                Cancel
            </Button>
        </td>
    </tr>
  );
};

export default EditableUserRow;