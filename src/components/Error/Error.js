import React from 'react';
// material-ui
import { Button } from '@material-ui/core';
// react-router
import { Link } from 'react-router-dom';
// css
import classes from './Error.module.css';

const Error = () => (
  <div className={classes.ErrorCont}>
    <p>Sry, something went wrong :(</p>
    <p>Page not found</p>
    <Button className={classes.Button} component={Link} to="/tasks">back</Button>
  </div>
);

export default Error;
