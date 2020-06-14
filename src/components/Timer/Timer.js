import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createTask } from '../../redux/actions';

let timerId = null;

const createTimeString = (hour, min, sec) => `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

const Timer = (props) => {
  const [secondsState, setSecondsState] = useState(0);
  const [minutsState, setMinutsState] = useState(0);
  const [hoursState, setHoursState] = useState(0);
  const [taskNameState, setTaskNameState] = useState('');
  const [timeStart, setTimeStart] = useState('');

  const onTimerStart = () => {
    const time = new Date();

    timerId = setInterval(() => {
      setSecondsState((prevSecond) => {
        if (prevSecond === 59) {
          setMinutsState((lastMinuts) => {
            if (lastMinuts === 59) {
              setHoursState((prevHour) => prevHour + 1);
              return 0;
            }
            return lastMinuts + 1;
          });
          return 0;
        }
        return prevSecond + 1;
      });
    }, 1000);

    setTimeStart(createTimeString(time.getHours(), time.getMinutes(), time.getSeconds()));
  };

  const onTimerStop = () => {
    const time = new Date();

    const newTask = {
      number: 1,
      task: taskNameState,
      timeStart,
      timeEnd: createTimeString(time.getHours(), time.getMinutes(), time.getSeconds()),
      timeSpend: createTimeString(hoursState, minutsState, secondsState),
      id: Date.now().toString(),
    };

    props.createTask(newTask);
    clearInterval(timerId);
    timerId = null;
    setTaskNameState('');
    setHoursState(0);
    setMinutsState(0);
    setSecondsState(0);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTaskNameState(e.target.value)}
        value={taskNameState}
      />
      {createTimeString(hoursState, minutsState, secondsState)}
      {!timerId ? <button onClick={onTimerStart}>start</button>
        : <button onClick={onTimerStop}>stop</button>}
    </div>
  );
};

// const mapDispatchToProps = {
//   createTask,
// };

export default connect(null, { createTask })(Timer);
