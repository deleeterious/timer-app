import React from 'react'
// redux
import { connect } from 'react-redux'
// material-ui
import { Paper, Box, Button } from '@material-ui/core'
// react-router
import { Link, Redirect } from 'react-router-dom'
// prop-types
import PropTypes from 'prop-types'
// css
import classes from './TaskInfo.module.css'
// utils
import { parseTime } from '../../utils/parseTime'

const TaskInfo = ({ tasks, match }) => {
  const currentTask = tasks.find(
    (task) => task.number.toString() === match.params.id
  )

  if (!currentTask) {
    return <Redirect to="/error" />
  }

  const { number, taskName, timeStart, timeEnd, timeSpend } = currentTask

  return (
    <Box className={classes.TaskInfo}>
      <Paper elevation={5} className={classes.TaskInfoItem}>
        Number:
        {number}
      </Paper>
      <Paper elevation={5} className={classes.TaskInfoItem}>
        Task name:
        {taskName}
      </Paper>
      <Paper elevation={5} className={classes.TaskInfoItem}>
        Time start:
        {parseTime(timeStart)}
      </Paper>
      <Paper elevation={5} className={classes.TaskInfoItem}>
        Time end:
        {parseTime(timeEnd)}
      </Paper>
      <Paper elevation={5} className={classes.TaskInfoItem}>
        Time spend:
        {parseTime(timeSpend, true)}
      </Paper>
      <Button className={classes.Button} component={Link} to="/tasks">
        back
      </Button>
    </Box>
  )
}

const mapStateToProps = (state) => ({ tasks: state.tasks })
TaskInfo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object
}

export default connect(mapStateToProps, null)(TaskInfo)
