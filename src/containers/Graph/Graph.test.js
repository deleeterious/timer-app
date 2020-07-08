import React from 'react';
// enzyme
import { mount } from 'enzyme';
// recharts
import { BarChart } from 'recharts';
// components
import { Graph } from './Graph';

test('grouping tasks for the schedule by the hour', () => {
  const data = [{
    timeSpend: 11969130,
    timeStart: 1594142162117,
  },
  {
    timeSpend: 21475993,
    timeStart: 1594154140208,
  }];

  const graphData = [
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 32 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 44 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 60 },
  ];

  const wrapper = mount(<Graph data={data} />);

  expect(wrapper.find(BarChart).prop('data')).toEqual(graphData);
});
