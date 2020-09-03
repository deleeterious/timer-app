import { takeEvery } from 'redux-saga/effects'
import { CREATE_TASK, DELETE_TASK, GENERATE_TASKS } from './types'
import { store } from '..'

function* workerLocalData() {
  const { tasks } = store.getState()

  yield localStorage.setItem('tasksState', JSON.stringify(tasks))
}

export function* watchLocalData() {
  yield takeEvery([CREATE_TASK, DELETE_TASK, GENERATE_TASKS], workerLocalData)
}
