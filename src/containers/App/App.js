import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
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
        <Redirect from="/" to="/tasks" />
        <Route exact path={['/tasks', '/graph']} component={Timer} />
        <Route exact path={['/tasks', '/graph']} component={Tabs} />
        <Route exact path="/tasks" component={TasksLogList} />

        <Route exact path="/tasks/:id" component={TaskInfo} />
      </Router>
    </div>
  );
}

export default App;
