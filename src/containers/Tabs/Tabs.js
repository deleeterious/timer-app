import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs as MaterialTabs, Tab } from '@material-ui/core';

const Tabs = () => (
  <MaterialTabs variant="fullWidth" indicatorColor="primary" textColor="primary">
    <Tab label="TASKS LOG" component={Link} to="/tasks" />
    <Tab label="TASKS CHARTS" component={Link} to="/graph" />
  </MaterialTabs>
);

export default Tabs;
