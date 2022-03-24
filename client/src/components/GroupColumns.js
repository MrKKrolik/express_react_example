import Button from 'react-bootstrap/Button'
export const GroupColumns = [
    {
        Header: "id",
        accessor: "group_id"
    },
    {
        Header: "name",
        accessor: "name"
    },
    {
        Header: "description",
        accessor: "description"
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