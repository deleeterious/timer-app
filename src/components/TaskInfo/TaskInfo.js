import React from 'react';
// redux
import { connect } from 'react-redux';
// material-ui
import { Paper, Box, Button } from '@material-ui/core';
// react-router
import { Link, Redirect } from 'react-router-dom';
// css
import classes from './TaskInfo.module.css';

const TaskInfo = ({ tasks, match }) => {
  if (!tasks.find((task) => task.number.toString() === match.params.id)) {
    return <Redirect to="/error" />;
  }

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
};

const mapStateToProps = (state) => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(TaskInfo);
