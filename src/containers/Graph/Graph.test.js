// utils
import { transformData } from '../../utils/transformData';

const CURRENT_DAY = 5;

test('grouping tasks for the schedule by the hour', () => {
  const data = [{
    timeEnd: 1596628922635,
    timeSpend: 8245000,
    timeStart: 1596620677635,
  },
  {
    timeEnd: 1596649452352,
    timeSpend: 20273000,
    timeStart: 1596629179352,
  }];

  const graphData = [
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
    { minutes: 16 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 55 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 60 },
    { minutes: 43 },
    { minutes: 0 },
    { minutes: 0 },
    { minutes: 0 },
  ];

  const tranformedData = transformData(data, CURRENT_DAY);

  expect(tranformedData).toEqual(graphData);
});
