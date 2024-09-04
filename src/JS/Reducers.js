import { ADDTASK, DELETETASK, EDITTASK, TOGGLETASKDONE } from "./ActionsType";

const initialState = {
  tasks: [{ id: 1, description: "task1", isDone: false }],
};

const Reducers = (state = initialState, action) => {
    
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case TOGGLETASKDONE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload // Use === for comparison
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
    case EDITTASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id // Use === for comparison
            ? { ...task, description: action.payload.taskName }
            : task
        ),
      };
    case DELETETASK:
      console.log(action.payload);
      return {
        ...state,
        tasks: state.tasks.filter((task) =>
          task.id !== action.payload // Use === for comparison
         ),
      };
    default:
      return state;
  }
};

export default Reducers;
