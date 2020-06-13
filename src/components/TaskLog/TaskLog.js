import React from 'react';

const TaskLog = ({
  data: {
    number, task, timeStart, timeEnd, timeSpend,
  },
}) => (
  <tr>
    <td>{number}</td>
    <td>{task}</td>
    <td>{timeStart}</td>
    <td>{timeEnd}</td>
    <td>{timeSpend}</td>
    <td><button>info</button></td>
    <td><button>delete</button></td>
  </tr>
);

export default TaskLog;
