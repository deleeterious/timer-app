import React from 'react';
// import InputTask from '../../components/InputTask';
import Timer from '../../components/Timer';
import Tabs from '../Tabs/Tabs';
import TasksLogList from '../TasksLogList';

function App() {
  return (
    <div>
      <Timer />
      <Tabs />
      <TasksLogList />
    </div>
  );
}

export default App;
