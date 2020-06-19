import React from 'react';
import { connect } from 'react-redux';

import { Paper, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classes from './TaskInfo.module.css';

const TaskInfo = ({ tasks, match }) => {
  if (!tasks) {
    return <h1>Такого таска не существует</h1>;
  }

  if (tasks.length >= 1) {
    const {
      number, taskName, timeStart, timeEnd, timeSpend,
    } = tasks.find((task) => task.number.toString() === match.params.id);

    return (
      <Box className={classes.TaskInfo}>
        <Paper elevation={5} className={classes.TaskInfoItem}>
          Number:
          { number}
        </Paper>
        <Paper elevation={5} className={classes.TaskInfoItem}>
          Task name:
          { taskName}
        </Paper>
        <Paper elevation={5} className={classes.TaskInfoItem}>
          Time start:
          { timeStart}
        </Paper>
        <Paper elevation={5} className={classes.TaskInfoItem}>
          Time end:
          { timeEnd}
        </Paper>
        <Paper elevation={5} className={classes.TaskInfoItem}>
          Time spend:
          { timeSpend}
        </Paper>
        <Button className={classes.Button} component={Link} to="/tasks">back</Button>
      </Box>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(TaskInfo);
