import React, { useState } from 'react';
// react-router
import { Link } from 'react-router-dom';
// material-ui
import { Tabs as MaterialTabs, Tab, Box } from '@material-ui/core';
// css
import classes from './Tabs.module.css';

const Tabs = () => {
  const [value, setValue] = useState('log');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <MaterialTabs
        className={classes.Tabs}
        variant="fullWidth"
        value={value}
        onChange={handleChange}
      >
        <Tab value="log" label="TASKS LOG" component={Link} to="/tasks" />
        <Tab value="graph" label="TASKS CHARTS" component={Link} to="/graph" />
      </MaterialTabs>
    </Box>
  );
};

export default Tabs;
