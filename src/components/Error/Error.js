import React from 'react'
// material-ui
import { Button, Box } from '@material-ui/core'
// react-router
import { Link } from 'react-router-dom'
// css
import classes from './Error.module.css'

const Error = () => (
  <Box className={classes.ErrorCont}>
    <p>Sry, something went wrong :(</p>
    <p>Page not found</p>
    <Button className={classes.Button} component={Link} to="/tasks">
      back
    </Button>
  </Box>
)

export default Error
