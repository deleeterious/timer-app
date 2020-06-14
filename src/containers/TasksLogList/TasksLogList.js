import React from 'react';
import { connect } from 'react-redux';
import TaskLog from '../../components/TaskLog';

const TasksLogList = ({ tasksLog }) => (
  <table>
    <tbody>
      <tr>
        <th>№</th>
        <th>Task</th>
        <th>Time start</th>
        <th>Time end</th>
        <th>Time spend</th>
        <th>info</th>
        <th>delete</th>
      </tr>
      {tasksLog.map((taskLog) => <TaskLog data={taskLog} key={taskLog.id} />)}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({ tasksLog: state.tasks.tasks });

export default connect(mapStateToProps, null)(TasksLogList);
