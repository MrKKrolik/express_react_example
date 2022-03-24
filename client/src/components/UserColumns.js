import Button from 'react-bootstrap/Button'
export const UserColumns = [
    {
        Header: "id",
        accessor: "user_id"
    },
    {
        Header: "name",
        accessor: "username"
    },
    {
        Header: "created",
        accessor: "created"
    },
    
    {
        Header: "group",
        accessor: "group_id"
    }, 
    {
        Header: "Actions",
        Cell: ({ cell }) => (
            <div className='user-actions'>
                <Button variant="outline-primary" value={cell.row.values.name}>
                    Edit
                </Button>{' '}
                <Button variant="outline-danger" value={cell.row.values.name}>
                    Delete
                </Button>
            </div>
            
          )
    } 
]