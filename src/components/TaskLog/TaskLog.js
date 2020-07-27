import React from 'react';
// react-router
import { Link } from 'react-router-dom';
// material-ui
import { TableRow, TableCell, Button } from '@material-ui/core';
// prop-types
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/actions';
// css
import classes from './TaskLog.module.css';
// utils
import { parseTime } from '../../utils/parseTime';

const TaskLog = ({
  data: {
    number, taskName, timeStart, timeEnd, timeSpend, id,
  }, deleteTask,
}) => (
  <TableRow className={classes.TableRow}>
    <TableCell>{number}</TableCell>
    <TableCell className={classes.TaskName} style={{ overflow: 'hidden' }}>{taskName}</TableCell>
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

TaskLog.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number,
    taskName: PropTypes.string,
    timeStart: PropTypes.number,
    timeEnd: PropTypes.number,
    timeSpand: PropTypes.number,
  }),
  deleteTask: PropTypes.func,
};

export default connect(null, { deleteTask })(TaskLog);
