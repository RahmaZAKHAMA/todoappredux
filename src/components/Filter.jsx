import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ListTask from "./ListTask";
import { useSelector } from "react-redux";

const Filter = () => {
  const [filteredList, setFilteredList] = useState(null);
const tasks = useSelector((state) => state.tasks);
  const filterByDone = () => {
    // This function should filter tasks that are done
    // Assuming you have access to tasks or an action to get tasks
    const doneTasks = tasks.filter((task) => task.isDone);

    setFilteredList(doneTasks);
    return true;
  };

  const filterByNotDone = () => {
    // This function should filter tasks that are not done
    // Assuming you have access to tasks or an action to get tasks
    const notDoneTasks = tasks.filter((task) => !task.isDone);
    setFilteredList(notDoneTasks);
    return true;
  };

  return (
    <div style={{ marginBottom: "40px", backgroundColor: "gray" ,paddingBottom:"20px",paddingTop:"10px"}}>
      <Button
        style={{ marginRight: "5px" }}
        variant="outline-danger"
        onClick={filterByDone}
      >
        Filter By Done
      </Button>
      <Button variant="outline-danger" onClick={filterByNotDone}>
        Filter By Not Done
      </Button>
      <ListTask filteredList={filteredList} completedlist={false} />
    </div>
  );
};

export default Filter;
