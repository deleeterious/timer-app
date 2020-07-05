import { CREATE_TASK, DELETE_TASK, GENERATE_TASKS } from './types';

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

const tasksGenerator = () => {
  const MIN_TASKS = 10;
  const MAX_TASKS = 15;

  const MIN_TASK_PAUSE = 300000;
  const MAX_TASK_PAUSE = 600000;

  const MIN_TASK_TIME_SPEND_MS = 600000;
  const MAX_TASK_TIME_SPEND_MS = 5.4e+6;

  const getRandomValue = (min, max) => Math.round((Math.random() * (max - min)) + min);

  const taskCreator = (prevTimeEnd, number) => {
    const time = prevTimeEnd + getRandomValue(MIN_TASK_PAUSE, MAX_TASK_PAUSE) || Date.now();
    const timeSpend = getRandomValue(MIN_TASK_TIME_SPEND_MS, MAX_TASK_TIME_SPEND_MS);

    return ({
      number,
      taskName: 'Genereted task',
      timeStart: time,
      timeSpend,
      timeEnd: time + timeSpend,
      id: time.toString(),
    });
  };

  const generetedTasks = [];

  for (let i = 0; i < getRandomValue(MIN_TASKS, MAX_TASKS); i++) {
    generetedTasks.push(taskCreator(generetedTasks[i - 1]?.timeEnd, i + 1));
  }
  return generetedTasks;
};

export const generateTasks = () => ({
  type: GENERATE_TASKS,
  payload: tasksGenerator(),
});
