import { CREATE_TASK, DELETE_TASK } from './types';

const rootReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: [...state.tasks].filter((task) => task.id !== action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
