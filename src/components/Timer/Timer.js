import React, {
  useState, useEffect, useRef, memo, useCallback,
} from 'react';

// material-ui
import {
  Box, Button,
} from '@material-ui/core';
// prop-types
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import { createTask } from '../../redux/actions';
// css
import classes from './Timer.module.css';
// components
import AlertDialog from '../AlertDialog';
// utils
import { fixMs } from '../../utils/utils';
import TimerClock from './TimerClock';
import TimerInput from './TimerInput';

let timerId = null;

// eslint-disable-next-line no-shadow
const Timer = ({ tasks, createTask }) => {
  const [taskName, setTaskName] = useState('');
  const [msState, setMsState] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [open, setOpen] = useState(false);

  const inputTaskName = useRef(null);

  useEffect(() => {
    setTaskName(localStorage.getItem('taskName') || '');

    const savedItem = JSON.parse(localStorage.getItem('timeStart'));

    if (savedItem?.isStart) {
      setIsStart(true);
      const time = savedItem.timeStart;
      timerId = setInterval(() => {
        setMsState(fixMs(Date.now() - time));
      }, 1000);

      localStorage.setItem('timeStart', JSON.stringify({ timeStart: +time, isStart: true }));
    }

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleChangeInput = useCallback((event) => {
    const { value } = event.target;
    setTaskName(value);
    localStorage.setItem('taskName', value);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTimerStart = () => {
    const time = new Date();
    setIsStart(true);
    timerId = setInterval(() => {
      setMsState(fixMs(Date.now() - time));
    }, 1000);

    localStorage.setItem('timeStart', JSON.stringify({ timeStart: +time, isStart: true }));
  };

  const handleTimerStop = () => {
    if (!taskName.trim()) {
      setOpen(true);
      return;
    }

    const newTask = {
      number: tasks[tasks.length - 1]?.number + 1 || 1,
      taskName,
      timeStart: new Date() - msState,
      timeEnd: +new Date(),
      timeSpend: msState,
      id: Date.now().toString(),
    };

    createTask(newTask);
    clearInterval(timerId);
    setIsStart(false);
    setMsState(0);
    setTaskName('');
    localStorage.setItem('timeStart', JSON.stringify({ isStart: false }));
    localStorage.setItem('taskName', '');
    inputTaskName.current.focus();
  };

  return (
    <>
      <AlertDialog
        open={open}
        handleClose={handleClose}
      />

      <Box className={classes.Timer}>
        <TimerInput
          inputTaskName={inputTaskName}
          handleChangeInput={handleChangeInput}
          taskName={taskName}
        />

        <TimerClock msState={msState} />

        <Button
          className={classes.Button}
          onClick={!isStart ? handleTimerStart : handleTimerStop}
        >
          {!isStart ? 'start' : 'stop'}
        </Button>
      </Box>
    </>
  );
};

Timer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  createTask: PropTypes.func,
};

const mapStateToProps = (state) => ({ tasks: state.tasks });

export default connect(mapStateToProps, { createTask })(memo(Timer));
