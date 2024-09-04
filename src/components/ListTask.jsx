import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
const ListTask = ({ }) => {
  const taskslist = useSelector((state) => state.tasks);
const [status,SetStatus]=useState("ALL");
  
const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  SetStatus(e.key);
  message.info("status set to" + e.key);
  console.log("click", e);
};
const items = [
  {
    label: "ALL",
    key: "ALL",
    icon: <UserOutlined />,
  },
  {
    label: "DONE",
    key: "DONE",
    icon: <UserOutlined />,
  },
  {
    label: "UNDONE",
    key: "UNDONE",
    icon: <UserOutlined />,
    danger: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};



  //const tasksToDisplay = completedlist
   // ? taskslist
    //: filteredList; 

  return (
    <div>
      
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            {status}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {status == "DONE"
          ? taskslist
              .filter((task) => task.isDone == true)
              .map((elt) => <Task task={elt} key={elt.id} />)
          : status == "UNDONE"
          ? taskslist
              .filter((task) => task.isDone == false)
              .map((elt) => <Task task={elt} key={elt.id} />)
          : status === "ALL"
          ? taskslist.map((elt) => <Task task={elt} key={elt.id} />)
          : null}
      </div>
    </div>
  );
};

export default ListTask
