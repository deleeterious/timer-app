import React from 'react';
import { connect } from 'react-redux';

const TaskInfo = (props) => {
  console.log(props);

  if (!props.task) {
    return <h1>Такого таска не существует</h1>;
  }

  if (props.task.length >= 1) {
    const {
      number, task, timeStart, timeEnd, timeSpend,
    } = props.task.find((tsk) => tsk.number.toString() === props.match.params.id);

    return (
      <div>
        <p>{number}</p>
        <p>{task}</p>
        <p>{timeStart}</p>
        <p>{timeEnd}</p>
        <p>{timeSpend}</p>
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({ task: state.tasks.tasks });

export default connect(mapStateToProps, null)(TaskInfo);
