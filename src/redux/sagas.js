import { takeEvery } from 'redux-saga/effects'
import { CREATE_TASK, DELETE_TASK, GENERATE_TASKS } from './types'
import { store } from '..'

function* workerLocalData() {
  localStorage.setItem('tasksState', JSON.stringify(store.getState()))
}

export function* watchLocalData() {
  yield takeEvery([CREATE_TASK, DELETE_TASK, GENERATE_TASKS], workerLocalData)
}
