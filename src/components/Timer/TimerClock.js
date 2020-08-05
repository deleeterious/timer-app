import React, { memo } from 'react';
import { Paper } from '@material-ui/core';
import classes from './Timer.module.css';
import { parseTime } from '../../utils/parseTime';

const TimerClock = ({ msState }) => (
  <Paper elevation={6} className={classes.Time}>
    {parseTime(msState, true)}
  </Paper>
);

export default memo(TimerClock);
