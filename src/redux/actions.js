import { CREATE_TASK } from './types';

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: task,
});
