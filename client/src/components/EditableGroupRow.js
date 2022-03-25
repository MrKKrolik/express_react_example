import React from "react";
import { Button } from "react-bootstrap";

const EditableGroupRow = ({ editGroupValue, handleEidtGroupChange, onEditFormSave, onCancel }) => {
  return (
    <tr>
        <td>{editGroupValue.group_id}</td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name"
          name="name"
          value={editGroupValue.name}
          onChange={handleEidtGroupChange}
        ></input>
        </td>
        <td>
        <input
          type="text"
          placeholder="Enter a description"
          name="description"
          value={editGroupValue.description}
          onChange={handleEidtGroupChange}
        ></input>
        </td>
        <td>
            <Button variant="outline-primary" onClick={(event) => onEditFormSave(event, editGroupValue.group_id)}>
                Save
            </Button>{' '}
            <Button variant="outline-danger" onClick={onCancel}>
                Cancel
            </Button>
        </td>
    </tr>
  );
};

export default EditableGroupRow;