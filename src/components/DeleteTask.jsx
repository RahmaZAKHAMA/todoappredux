import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deletTask } from '../JS/Actions';
import { DeleteOutlined } from "@ant-design/icons";

const DeleteTask = ({task}) => {
    const dispatcher = useDispatch();
    console.log('deleted'+task.id);
    const handleDelete = () => {
      dispatcher(deletTask(task.id));
    };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px", // Equivalent to w-8
          height: "40px", // Equivalent to h-8
          border: "2px solid Gray", // Equivalent to border-2 border-blue-500
          borderRadius: "50%", // Equivalent to rounded-full
          cursor: "pointer", // Equivalent to cursor-pointer
        }}
        variant="outline-primary"
        onClick={handleDelete}
      >
        <DeleteOutlined style={{ color: "red"}} />
      </div>
    </div>
  );
}

export default DeleteTask