import { CREATE_TASK, DELETE_TASK, GENERATE_TASKS } from './types';

const rootReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: [...state.tasks].filter((task) => task.id !== action.payload) };
    case GENERATE_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
