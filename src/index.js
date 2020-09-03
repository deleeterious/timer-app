import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'
// components
import App from './containers/App'
// sagas
import { watchLocalData } from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  tasks: []
}

const persistedState = localStorage.getItem('tasksState')
  ? { ...initialState, tasks: JSON.parse(localStorage.getItem('tasksState')) }
  : initialState

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchLocalData)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
