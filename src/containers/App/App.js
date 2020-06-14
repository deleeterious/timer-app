import React from 'react';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';
// import InputTask from '../../components/InputTask';
import Timer from '../../components/Timer';
import Tabs from '../Tabs/Tabs';
import TasksLogList from '../TasksLogList';
import TaskInfo from '../../components/TaskInfo/TaskInfo';

function App() {
  return (
    <div>
      <Router>
        <Timer />
        <Tabs />

        <Route exact path="/tasks" component={TasksLogList} />
        <Route exact path="/tasks/:id" component={TaskInfo} />
      </Router>
    </div>
  );
}

export default App;
