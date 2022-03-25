import React from "react";
import { Button } from "react-bootstrap";

const ReadOnlyUserRow = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
        <td>{user.user_id}</td>
        <td>{user.username}</td>
        <td>{user.group_id}</td>
        <td>{user.created}</td>
        <td>
            <Button variant="outline-primary" onClick={(event) => onEdit(event, user)}>
                Edit
            </Button>{' '}
            <Button variant="outline-danger" onClick={() => onDelete(user.user_id)}>
                Delete
            </Button>
        </td>
    </tr>
  );
};

export default ReadOnlyUserRow;