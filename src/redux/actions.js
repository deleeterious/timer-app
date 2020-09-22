// types
import { CREATE_TASK, DELETE_TASK, EDIT_TASK, GENERATE_TASKS } from './types'
// utils
import { tasksGenerator } from '../utils/tasksGenerator'

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: task
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
})

export const generateTasks = () => ({
  type: GENERATE_TASKS,
  payload: tasksGenerator()
})

export const editTask = (editedTask) => ({
  type: EDIT_TASK,
  payload: editedTask
})
