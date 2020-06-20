import React from 'react';
import {
  BarChart, XAxis, CartesianGrid, YAxis, Tooltip, Legend, Bar,
} from 'recharts';
import { connect } from 'react-redux';

const Graph = ({ data }) => {
  // const data = [{
  //   number: 1, taskName: '', timeStart: 1592557587927, timeEnd: 1592557589928, timeSpend: 2001,
  // }];

  const graphData = [];
  for (let i = 0; i < 24; i++) {
    const dataItem = {
      minutes: 0,
    };
    graphData.push(dataItem);
  }

  data.map((task) => {
    const minutesSpend = parseInt((task.timeSpend / (1000 * 60)), 10);
    const hoursSpend = parseInt((task.timeSpend / (1000 * 60)) / 60, 10);
    const timeStart = {
      hours: parseInt((task.timeStart / (1000 * 60 * 60)) % 24, 10),
      minutes: parseInt((task.timeStart / (1000 * 60)) % 60, 10),
    };

    console.log(minutesSpend, hoursSpend);
  });

  return (
    <BarChart width={750} height={250} data={graphData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="minutes" fill="#8884d8" />
    </BarChart>

  );
};

const mapStateToProps = (state) => ({ data: state.tasks });

export default connect(mapStateToProps, null)(Graph);
