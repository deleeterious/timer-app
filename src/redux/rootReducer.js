import { CREATE_TASK, DELETE_TASK, EDIT_TASK, GENERATE_TASKS } from './types'

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
    case EDIT_TASK: {
      const editedTasks = [...tasks]

      editedTasks.forEach((item) => {
        if (item.id === payload.id) {
          item.taskName = payload.taskName
          item.timeStart = payload.timeStart
          item.timeEnd = payload.timeEnd
          item.timeSpend = payload.timeSpend
        }
      })

      return {
        ...state,
        tasks: editedTasks
      }
    }
    default:
      return state
  }
}

export default rootReducer
