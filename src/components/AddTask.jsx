import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtask } from "../JS/Actions";

const AddTask = () => {
     const [taskDescription, setTaskDescription] = useState(""); 
    const dispatcher = useDispatch();
     const handleAdd = () => {
    if (taskDescription.trim() === '') return; // Avoid adding empty tasks

    dispatcher(
      addtask({
        id: Math.random(), // Use a unique identifier for tasks
        description: taskDescription,
        isDone: false,
      })
    );
     }
  return (
    <div style={{marginBottom:'15px'}}>
        <button onClick={handleAdd}>Add</button>
        <input type="text" placeholder="Add a task..."  value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}/>
    </div>
  )
}

export default AddTask