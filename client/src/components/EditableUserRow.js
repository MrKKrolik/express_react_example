import React from "react";
import { Button } from "react-bootstrap";

const EditableUserRow = ({ editUserValue, handleEidtUserChange, onEditFormSave, onCancel }) => {
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
        <input
          type="text"
          placeholder="Choose a group"
          name="group"
          value={editUserValue.group_id}
          onChange={handleEidtUserChange}
        ></input>
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