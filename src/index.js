import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
// components
import App from './containers/App';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  tasks: [],
};

const persistedState = localStorage.getItem('tasksState')
  ? JSON.parse(localStorage.getItem('tasksState'))
  : initialState;

const store = createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
  localStorage.setItem('tasksState', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
