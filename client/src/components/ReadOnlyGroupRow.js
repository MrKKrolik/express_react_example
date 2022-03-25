import React from "react";
import { Button } from "react-bootstrap";

const ReadOnlyGroupRow = ({ group, onEdit, onDelete }) => {
  return (
    <tr>
        <td>{group.group_id}</td>
        <td>{group.name}</td>
        <td>{group.description}</td>
        <td>
            <Button variant="outline-primary" onClick={(event) => onEdit(event, group)}>
                Edit
            </Button>{' '}
            <Button variant="outline-danger" onClick={() => onDelete(group.group_id)}>
                Delete
            </Button>
        </td>
    </tr>
  );
};

export default ReadOnlyGroupRow;