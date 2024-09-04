import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { edittask } from '../JS/Actions';
import { EditOutlined } from "@ant-design/icons";

const EditTask = ({task}) => {
      const [show, setShow] = useState(false);
       const [taskName, setTaskName] = useState("");
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  const dispatcher = useDispatch();
     const HandleEdit = () => {
       dispatcher(edittask(task.id, taskName));
       handleClose(true);
     };
  return (
    <div>
      <div
         style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',      // Equivalent to w-8
      height: '40px',     // Equivalent to h-8
      border: '2px solid Gray', // Equivalent to border-2 border-blue-500
      borderRadius: '50%',  // Equivalent to rounded-full
      cursor: 'pointer',  // Equivalent to cursor-pointer
    }}
        variant="outline-primary"
        onClick={handleShow}
      >
        <EditOutlined />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={task.description}
                required
                autoFocus
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleEdit}>
            Edit Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTask