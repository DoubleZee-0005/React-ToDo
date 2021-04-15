import { FaTimes } from 'react-icons/fa';

function Task({ task, onDelete, onToggle }) {
    return (
        <div className = {`task ${task.reminder === true ? "reminder" : ''}`} onDoubleClick = {() => onToggle(task.id)} >
            <h3>{task.text} <FaTimes onClick = {() => onDelete(task.id)}  style = {{color: 'red',cursor: 'pointer'}} /></h3>
            <span>{task.day}</span>
        </div>
    )
}

export default Task
