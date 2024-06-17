import React, {useState} from 'react';

function Todo(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask("");
    }

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => index!=i));
    }

    return (
        <>
            <div className='todo-app-container'>
                <h2>To-do App</h2>
                <input type="text" placeholder='enter task todo' onChange={handleChange}/>
                <button className='add-button' onClick={addTask}>Add</button>
                <ol>
                    {
                        tasks.map(
                            (task, index) => 
                            <li key={index}>{task}
                                <button onClick={() => removeTask(index)}>Delete</button>
                            </li>
                        )
                    }
                </ol>
            </div>
        </>
    );
}

export default Todo;