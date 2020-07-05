import React from 'react';
// recharts
import {
  BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer,
} from 'recharts';
// material UI
import { Button } from '@material-ui/core';
// redux
import { connect } from 'react-redux';
import { generateTasks } from '../../redux/actions';
// styles
import classes from './Graph.module.css';

const Graph = ({ data, generateTasks }) => {
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
        graphData[hourStart].minutes = 60;
        minutesSpend -= 60;
        hourStart += 1;
      }
    }

    if (hourStart === 24) hourStart = 0;

    graphData[hourStart].minutes += minutesSpend;
  });

  return (
    <div>
      <BarChart width={600} height={250} data={graphData}>
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="minutes" fill="#8884d8" />
      </BarChart>

      <Button
        className={classes.Button}
        onClick={generateTasks}
      >
        GENERATE
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => ({ data: state.tasks });

export default connect(mapStateToProps, { generateTasks })(Graph);
