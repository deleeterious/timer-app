import { CREATE_TASK, DELETE_TASK, GENERATE_TASKS } from './types'

const rootReducer = (state, action) => {
  const { tasks } = state
  const { type, payload } = action

  switch (type) {
    case CREATE_TASK:
      return { ...state, tasks: [...tasks, payload] }
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...tasks].filter((task) => task.id !== payload)
      }
    case GENERATE_TASKS:
      return { ...state, tasks: payload }
    default:
      return state
  }
}

export default rootReducer
