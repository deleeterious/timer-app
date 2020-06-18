import { CREATE_TASK, DELETE_TASK } from './types';

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
