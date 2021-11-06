import React, {useState} from 'react'
import "./todoapp.css";

function TodoApp() {

    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
    };

    const AddTask = () => {
        // console.log(task);
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value: task,
                isCompleted: false,
            }

            setTaskList([...tasklist, taskDetails]);
        }
    };

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(tasklist.filter((t) => t.id != id));
    }

    const completedTask = (e, id) => {
        e.preventDefault();
        //let's find index of element
        const element = tasklist.findIndex(el => el.id == id);

        //copy array into new variable
        const newTaskList = [...tasklist];

        //edit our elements
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true,
        }
        setTaskList(newTaskList);
    }
    return (
        <div className="todo">
            <input type="text" name="text" id="text" onChange={(e) => handleChange(e)} placeholder="Add task..."/>
            <button className="add-btn" onClick={AddTask}>Add</button>
            <br/>
            {tasklist !== [] ? (
                <ul>
                    {tasklist.map((t) => (
                        <li className={t.isCompleted ? "crossText" : "listitem"}>
                            {t.value}
                            <button className="completed" onClick={e => completedTask(e, t.id)}>Completed</button>
                            <button className="delete" onClick={(e) => deleteTask(e, t.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default TodoApp
