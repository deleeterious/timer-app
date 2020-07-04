import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { TableRow, TableCell, Button } from '@material-ui/core';
import classes from '../Timer/Timer.module.css';
import { parseTime } from '../Timer/Timer';

import { deleteTask } from '../../redux/actions';

const TaskLog = ({
  data: {
    number, taskName, timeStart, timeEnd, timeSpend, id,
  }, deleteTask,
}) => (
  <TableRow>
    <TableCell>{number}</TableCell>
    <TableCell>{taskName}</TableCell>
    <TableCell>{parseTime(timeStart)}</TableCell>
    <TableCell>{parseTime(timeEnd)}</TableCell>
    <TableCell>{parseTime(timeSpend, true)}</TableCell>
    <TableCell>
      <Button
        className={classes.Button}
        component={Link}
        to={`/tasks/${number}`}
      >
        info
      </Button>
    </TableCell>
    <TableCell>
      <Button
        className={classes.Button}
        onClick={() => { deleteTask(id); }}
      >
        delete
      </Button>
    </TableCell>
  </TableRow>
);

export default connect(null, { deleteTask })(TaskLog);
