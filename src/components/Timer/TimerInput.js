import React, { memo } from 'react'
import { Input } from '@material-ui/core'
import classes from './Timer.module.css'

const TimerInput = ({ inputTaskName, handleChangeInput, taskName }) => (
  <Input
    inputRef={inputTaskName}
    className={classes.Input}
    value={taskName}
    type="text"
    onChange={handleChangeInput}
    placeholder="Name of your task"
  />
)

export default memo(TimerInput)
