import React, { useState, useEffect } from 'react';
// material-ui
import {
  Box, Input, Paper, Button,
} from '@material-ui/core';
// redux
import { connect } from 'react-redux';
import { createTask } from '../../redux/actions';
// css
import classes from './Timer.module.css';
// components
import AlertDialog from '../AlertDialog';

let timerId = null;
let number = 0;

export const parseTime = (ms, utc = false) => {
  const time = new Date(ms);
  const seconds = utc ? time.getUTCSeconds() : time.getSeconds();
  const minutes = utc ? time.getUTCMinutes() : time.getMinutes();
  const hours = utc ? time.getUTCHours() : time.getHours();
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const Timer = (props) => {
  const [taskName, setTaskName] = useState('');
  const [msState, setMsState] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedItem = JSON.parse(localStorage.getItem('timeStart'));

    if (savedItem?.isStart) {
      setIsStart(true);
      const time = savedItem.timeStart;
      timerId = setInterval(() => {
        setMsState(Date.now() - time);
      }, 1000);

      localStorage.setItem('timeStart', JSON.stringify({ timeStart: +time, isStart: true }));
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const onTimerStart = () => {
    const time = new Date();
    setIsStart(true);
    timerId = setInterval(() => {
      setMsState(Date.now() - time);
    }, 1000);

    localStorage.setItem('timeStart', JSON.stringify({ timeStart: +time, isStart: true }));
  };

  const onTimerStop = () => {
    number += 1;

    if (!taskName.trim()) {
      setOpen(true);
      return;
    }

    const newTask = {
      number,
      taskName,
      timeStart: new Date() - msState,
      timeEnd: +new Date(),
      timeSpend: msState,
      id: Date.now().toString(),
    };

    props.createTask(newTask);
    clearInterval(timerId);
    setIsStart(false);
    setMsState(0);
    setTaskName('');
    localStorage.setItem('timeStart', JSON.stringify({ isStart: false }));
  };

  return (
    <>
      <AlertDialog
        open={open}
        handleClose={handleClose}
      />

      <Box className={classes.Timer}>
        <Input
          className={classes.Input}
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Name of your task"
          value={taskName}
        />
        <Paper elevation={6} className={classes.Time}>
          {parseTime(msState, true)}
        </Paper>
        {!isStart ? <Button className={classes.Button} onClick={onTimerStart}>start</Button>
          : <Button className={classes.Button} onClick={onTimerStop}>stop</Button>}
      </Box>
    </>
  );
};

// const mapDispatchToProps = {
//   createTask,
// };

export default connect(null, { createTask })(Timer);
