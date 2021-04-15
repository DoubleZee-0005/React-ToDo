import { useState } from 'react';

const AddTask = ({ onAdd }) => {

    const [text, settext] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("please add text")
            return
        }

        onAdd({text, day, reminder})
        setReminder(false)
        settext('')
        setDay('')
    }

    return (
        <form className = "add-form" onSubmit = {onSubmit}>
            <div className = "form-control">
                <label>Task</label>
                <input type = "text" placeholder = "Add text" value = {text} onChange = { (e) => settext(e.target.value) } />
            </div>

            <div className = "form-control">
                <label>Day & Time</label>
                <input type = "text" placeholder = "Add Day & Time" value = {day} onChange = { (e) => setDay(e.target.value) }/>
            </div>

            <div className = "form-control form-control-check">
                <label>Reminder</label>
                <input type = "checkbox" checked = {reminder} value = {reminder} onChange = {(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type = 'submit' value = 'Save text' className = "btn btn-block" />
     
        </form>
    )
}

export default AddTask
