import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { createTask } from '../../redux/actions';

let timerId = null;
let number = 0;

const parseTime = (ms) => {
  const seconds = parseInt((ms / 1000) % 60, 10);
  const minutes = parseInt((ms / (1000 * 60)) % 60, 10);
  const hours = parseInt((ms / (1000 * 60 * 60)) % 24, 10);
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const Timer = (props) => {
  const [taskName, setTaskName] = useState('');
  const [msState, setMsState] = useState(0);
  const [isStart, setIsStart] = useState(false);

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

    const newTask = {
      number,
      taskName,
      timeStart: parseTime(new Date() - msState),
      timeEnd: parseTime(new Date()),
      timeSpend: parseTime(msState),
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
    <div>
      <input
        type="text"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      {parseTime(msState)}
      {!isStart ? <button onClick={onTimerStart}>start</button>
        : <button onClick={onTimerStop}>stop</button>}
    </div>
  );
};

// const mapDispatchToProps = {
//   createTask,
// };

export default connect(null, { createTask })(Timer);
