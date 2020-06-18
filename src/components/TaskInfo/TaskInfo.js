import React from 'react';
import { connect } from 'react-redux';

const TaskInfo = ({ tasks, match }) => {
  if (!tasks) {
    return <h1>Такого таска не существует</h1>;
  }

  if (tasks.length >= 1) {
    const {
      number, taskName, timeStart, timeEnd, timeSpend,
    } = tasks.find((task) => task.number.toString() === match.params.id);

    return (
      <div>
        <p>
          Number:
          { number}
        </p>
        <p>
          Task name:
          { taskName}
        </p>
        <p>
          Time start:
          { timeStart}
        </p>
        <p>
          Time end:
          { timeEnd}
        </p>
        <p>
          Time spend:
          { timeSpend}
        </p>
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({ tasks: state.tasks.tasks });

export default connect(mapStateToProps, null)(TaskInfo);
