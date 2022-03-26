import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../index";

const ReadOnlyUserRow = ({ user, onEdit, onDelete }) => {
  const {groups} = useContext(Context)
  const gruopName = () => {
    for (const group of groups.groups) {
      if (group.group_id === user.group_id)
          return group.name
    }
  }
  return (
    <tr>
        <td>{user.user_id}</td>
        <td>{user.username}</td>
        <td>{gruopName()}</td>
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