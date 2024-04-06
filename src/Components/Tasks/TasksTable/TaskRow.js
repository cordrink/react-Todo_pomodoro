const TaskRow = ({task}) => {
    return (
        <tr>
            <td>
                <input type="checkbox"/>
            </td>
            <td>
                { task.title }
            </td>
            <td>
                {task.description}
            </td>
            <td>
                {task.createdAt.toLocaleString()}
            </td>
            <td>
                ACTION
            </td>
        </tr>
    );
}

export default TaskRow;