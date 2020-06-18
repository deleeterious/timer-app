import React from 'react';
import { connect } from 'react-redux';
import TaskLog from '../../components/TaskLog';

const TasksLogList = ({ tasks }) => (
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
      {tasks.map((task) => <TaskLog data={task} key={task.id} />)}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(TasksLogList);
