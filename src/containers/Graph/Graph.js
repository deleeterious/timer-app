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

// eslint-disable-next-line no-shadow
export const Graph = ({ data, generateTasks }) => {
  const graphData = [];
  for (let i = 0; i < 24; i++) {
    graphData.push({ minutes: 0 });
  }

  data.forEach((task) => {
    const timeStart = new Date(task.timeStart);
    let hourStart = new Date(task.timeStart).getHours();
    let minutesSpend = Math.floor(new Date(task.timeSpend) / (1000 * 60));

    if (timeStart.getMinutes() + minutesSpend > 60) {
      const residue = 60 - timeStart.getMinutes();
      graphData[hourStart].minutes += residue;
      hourStart += 1;
      minutesSpend -= residue;

      while (minutesSpend > 60) {
        if (hourStart === 24) hourStart = 0;
        graphData[hourStart].minutes = 60;
        minutesSpend -= 60;
        hourStart += 1;
      }
    }

    graphData[hourStart].minutes += minutesSpend;
  });

  return (
    <Box className={classes.Graph}>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={graphData}>
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
};
const mapStateToProps = (state) => ({ data: state.tasks });

export default connect(mapStateToProps, { generateTasks })(Graph);

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  generateTasks: PropTypes.func,
};
