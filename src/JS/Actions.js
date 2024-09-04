export const addtask = (newTask) => {
  return {
    type: "ADDTASK",
    payload: newTask,
  };
};
export const toggleTaskDone = (id) => {
     console.log("taskdone" + id);
  return {
  
    type: "TOGGLETASKDONE",
    payload: id,
  };
};

export const edittask = (id, taskName) => {
    
  return {
    type: "EDITTASK",
    payload: { id, taskName },
  };
};

export const deletTask = (id) => {
 
  return {
    type: "DELETETASK",
    payload: id,
  };
};
