import React, { useState } from 'react'
// react-router
import { Link } from 'react-router-dom'
// material-ui
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers'
import { Alert } from '@material-ui/lab'
import { TableRow, TableCell, Button, Input, Snackbar } from '@material-ui/core'
// prop-types
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { deleteTask, editTask } from '../../redux/actions'
// css
import classes from './TaskLog.module.css'
// utils
import { parseTime } from '../../utils/parseTime'

const TaskLog = ({
  data: { number, taskName, timeStart, timeEnd, timeSpend, id },
  deleteTask,
  editTask
}) => {
  const [isEdit, setIsEdit] = useState(false)

  const [editedTaskName, setEditedTaskName] = useState(taskName)
  const [editedTimeStart, setEditedTimeStart] = useState(timeStart)
  const [editedTimeEnd, setEditedTimeEnd] = useState(timeEnd)

  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" variant="filled">
          Time start cannot be more than time end
        </Alert>
      </Snackbar>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TableRow className={classes.TableRow}>
          <TableCell>{number}</TableCell>
          <TableCell
            className={classes.TaskName}
            style={{ overflow: 'hidden' }}
          >
            {isEdit ? (
              <Input
                value={editedTaskName}
                onChange={(e) => setEditedTaskName(e.target.value)}
              />
            ) : (
              taskName
            )}
          </TableCell>
          <TableCell>
            {isEdit ? (
              <TimePicker
                ampm={false}
                format="HH:mm:ss"
                value={editedTimeStart}
                onChange={(time) => {
                  setEditedTimeStart((prevTime) => {
                    if (time > editedTimeEnd) {
                      setOpen(true)
                      return prevTime
                    }
                    return Number(time)
                  })
                }}
              />
            ) : (
              parseTime(timeStart)
            )}
          </TableCell>
          <TableCell>
            {isEdit ? (
              <TimePicker
                ampm={false}
                format="HH:mm:ss"
                value={editedTimeEnd}
                onChange={(time) => setEditedTimeEnd(Number(time))}
              />
            ) : (
              parseTime(timeEnd)
            )}
          </TableCell>
          <TableCell>{parseTime(timeSpend, true)}</TableCell>
          <TableCell>
            <Button
              className={classes.Button}
              component={Link}
              to={`/tasks/${number}`}
            >
              info
            </Button>
          </TableCell>
          <TableCell>
            <Button
              style={{ marginRight: 10 }}
              className={classes.Button}
              onClick={() => {
                setIsEdit(!isEdit)
                if (
                  taskName !== editedTaskName ||
                  timeStart !== editedTimeStart ||
                  timeEnd !== editedTimeEnd
                ) {
                  editTask({
                    id,
                    taskName: editedTaskName,
                    timeStart: editedTimeStart,
                    timeEnd: editedTimeEnd,
                    timeSpend: editedTimeEnd - editedTimeStart
                  })
                }
              }}
            >
              {isEdit ? 'apply' : 'edit'}
            </Button>
            <Button
              className={classes.Button}
              onClick={() => {
                deleteTask(id)
              }}
            >
              delete
            </Button>
          </TableCell>
        </TableRow>
      </MuiPickersUtilsProvider>
    </>
  )
}

TaskLog.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number,
    taskName: PropTypes.string,
    timeStart: PropTypes.number,
    timeEnd: PropTypes.number,
    timeSpend: PropTypes.number
  }),
  deleteTask: PropTypes.func
}

export default connect(null, { deleteTask, editTask })(TaskLog)
