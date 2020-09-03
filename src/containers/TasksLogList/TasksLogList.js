import React from 'react'
// redux
import { connect } from 'react-redux'
// material-ui
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'
// prop-types
import PropTypes from 'prop-types'
// components
import TaskLog from '../../components/TaskLog'
// css
import classes from './TasksLogList.module.css'

const TasksLogList = ({ tasks }) => {
  return (
    <Table className={classes.Table}>
      <TableHead>
        <TableRow>
          <TableCell>№</TableCell>
          <TableCell>Task</TableCell>
          <TableCell>Time start</TableCell>
          <TableCell>Time end</TableCell>
          <TableCell>Time spend</TableCell>
          <TableCell>Info</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TaskLog data={task} key={task.id} />
        ))}
      </TableBody>
    </Table>
  )
}

const mapStateToProps = (state) => ({ tasks: state.tasks })

export default connect(mapStateToProps, null)(TasksLogList)

TasksLogList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
}
