/*
  Transform data to Recharts data
*/

export const transformData = (data) => {
  const graphData = [];
  for (let i = 0; i < 24; i++) {
    graphData.push({
      minutes: 0,
    });
  }

  data.forEach((task) => {
    const timeStart = new Date(task.timeStart);
    const timeEnd = new Date(task.timeEnd);
    let hourStart = new Date(task.timeStart).getHours();
    let minutesSpend = Math.floor(new Date(task.timeSpend) / (1000 * 60));

    if (timeEnd.getDate() === new Date().getDate() && timeStart.getDate() === timeEnd.getDate()) {
      if (timeStart.getMinutes() + minutesSpend > 60) {
        const residue = 60 - timeStart.getMinutes();
        graphData[hourStart].minutes += residue;
        hourStart += 1;
        minutesSpend -= residue;
        if (hourStart >= 24) {
          hourStart = 0;
        }

        while (minutesSpend > 60) {
          graphData[hourStart].minutes = 60;
          minutesSpend -= 60;
          hourStart += 1;
          if (hourStart >= 24) {
            hourStart = 0;
          }
        }
      }

      graphData[hourStart].minutes += minutesSpend;
    }
  });

  return graphData;
};
