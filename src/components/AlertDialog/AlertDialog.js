import React from 'react'
// material-ui
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
// prop-types
import PropTypes from 'prop-types'
// styles
import classes from './AlertDialog.module.css'

const AlertDialog = ({ open, handleClose }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title" className={classes.DialogTitle}>
      Empty task name
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        You are trying close your task without name,enter the title and try
        again!
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

AlertDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
}

export default AlertDialog
