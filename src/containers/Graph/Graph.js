import React from 'react';
// recharts
import {
  BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer,
} from 'recharts';
// material UI
import { Button, Box } from '@material-ui/core';
// prop-types
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import { generateTasks } from '../../redux/actions';
// styles
import TimerClasses from '../../components/Timer/Timer.module.css';
import classes from './Graph.module.css';
// utils
import { transformData } from '../../utils/transformData';

// eslint-disable-next-line no-shadow
export const Graph = ({ data, generateTasks }) => (
  <Box className={classes.Graph}>
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={transformData(data)}>
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Minutes in this hour" maxBarSize={25} dataKey="minutes" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>

    <Button
      className={TimerClasses.Button}
      style={{ float: 'right' }}
      onClick={generateTasks}
    >
      GENERATE
    </Button>
  </Box>
);

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  generateTasks: PropTypes.func,
};

const mapStateToProps = (state) => ({ data: state.tasks });

export default connect(mapStateToProps, { generateTasks })(Graph);
