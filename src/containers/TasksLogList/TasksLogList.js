import React from 'react';
import { connect } from 'react-redux';
import {
  Table, TableHead, TableRow, TableCell, TableBody,
} from '@material-ui/core';
import TaskLog from '../../components/TaskLog';

const TasksLogList = ({ tasks }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>№</TableCell>
        <TableCell>Task</TableCell>
        <TableCell>Time start</TableCell>
        <TableCell>Time end</TableCell>
        <TableCell>Time spend</TableCell>
        <TableCell>Info</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {tasks.map((task) => <TaskLog data={task} key={task.id} />)}
    </TableBody>
  </Table>
);

const mapStateToProps = (state) => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(TasksLogList);
