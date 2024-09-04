import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { edittask, toggleTaskDone } from "../JS/Actions";
import { Button, Form, Modal } from "react-bootstrap";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
const Task = ({ task }) => {
 const [show, setShow] = useState(false);
  const [taskhandled, setTaskhandled] = useState(false);
   const handleShow = () => setShow(true);
  const dispatcher = useDispatch();
  const handleToggleDone = () => {
    console.log('------------------'+task.id);
    dispatcher(toggleTaskDone(task.id));
  };

 

  /*return (
    <div>
      <div>
        {!task.isDone ? (
          <h1 style={{ textDecoration: " line-through" }}>
            {task.description}
          </h1>
        ) : (
          <h1>{task.description}</h1>
        )}
        <button onClick={handleToggleDone}>
          {task.isDone ? "Not Done" : "Done"}
        </button>
        <button onClick={alert}>EDIT</button>
      </div>
      <div></div>
    </div>
  );*/
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        margin: "1%",
        gap: "20px",
        backgroundColor: "lightgray",
        height: "50px",
        padding: "5px",
      }}
    >
      {task.isDone ? (
        <h1 style={{ textDecoration: " line-through" }}>{task.description}</h1>
      ) : (
        <h1>{task.description}</h1>
      )}
      <Button
        className="button-margin rounded-circle"
        variant="secondary"
        onClick={handleToggleDone}
      >
        {task.isDone ? "Not Done" : "Done"}
      </Button>

      <EditTask task={task} />
      
      <DeleteTask task={task} />
    </div>
  );
};

export default Task;
