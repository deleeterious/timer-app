import React from 'react';
import { Link } from 'react-router-dom';

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
    <td><Link to={`/tasks/${number}`}>info</Link></td>
    <td><button>delete</button></td>
  </tr>
);

export default TaskLog;
