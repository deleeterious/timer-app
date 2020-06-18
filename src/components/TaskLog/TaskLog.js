import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteTask } from '../../redux/actions';

const TaskLog = ({
  data: {
    number, taskName, timeStart, timeEnd, timeSpend, id,
  }, deleteTask,
}) => (
  <tr>
    <td>{number}</td>
    <td>{taskName}</td>
    <td>{timeStart}</td>
    <td>{timeEnd}</td>
    <td>{timeSpend}</td>
    <td><Link to={`/tasks/${number}`}>info</Link></td>
    <td><button onClick={() => { deleteTask(id); }}>delete</button></td>
  </tr>
);

export default connect(null, { deleteTask })(TaskLog);
