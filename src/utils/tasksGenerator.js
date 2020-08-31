export const tasksGenerator = () => {
  const MIN_TASKS = 10
  const MAX_TASKS = 15

  const MIN_TASK_PAUSE = 300000
  const MAX_TASK_PAUSE = 600000

  const MIN_TASK_TIME_SPEND_MS = 600000
  const MAX_TASK_TIME_SPEND_MS = 5.4e6

  const getRandomValue = (min, max) =>
    Math.round(Math.random() * (max - min) + min)

  const taskCreator = (prevTimeEnd, number) => {
    const time =
      prevTimeEnd + getRandomValue(MIN_TASK_PAUSE, MAX_TASK_PAUSE) || Date.now()
    const timeSpend = getRandomValue(
      MIN_TASK_TIME_SPEND_MS,
      MAX_TASK_TIME_SPEND_MS
    )

    return {
      number,
      taskName: 'Generated task',
      timeStart: time,
      timeSpend,
      timeEnd: time + timeSpend,
      id: time.toString()
    }
  }

  const generatedTasks = []

  for (let i = 0; i < getRandomValue(MIN_TASKS, MAX_TASKS); i++) {
    generatedTasks.push(taskCreator(generatedTasks[i - 1]?.timeEnd, i + 1))
  }
  return generatedTasks
}
