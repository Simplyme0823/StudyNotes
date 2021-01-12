/** @format */

function loopRequest(promiseArr, max = 3) {
  const taskPool = [];
  const loopFn = async tasks => {
    if (tasks.length === 0) return;
    const currentTask = tasks.shift();

    try {
      await currentTask.request();
    } catch (err) {
      this.pauses.push(currentTask);
    }

    return loopFn(tasks);
  };

  while (max--) {
    taskPool.push(loopFn(promiseArr));
  }
  return Promise.all(taskPool);
}
