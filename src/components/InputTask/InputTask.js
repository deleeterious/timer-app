import React, { useState } from 'react';

const InputTask = () => {
  const [taskNameState, setTaskNameState] = useState('');
  return (
    <input
      type="text"
      onChange={(e) => setTaskNameState(e.target.value)}
      value={taskNameState}
    />
  );
};

export default InputTask;
