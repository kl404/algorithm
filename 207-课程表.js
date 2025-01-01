/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adjacency = [];
  const indegrees = new Array(numCourses).fill(0);

  for ([i, j] of prerequisites) {
    if (!adjacency[j]) {
      adjacency[j] = [];
    }
    adjacency[j].push(i);
    indegrees[i]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length) {
    const selected = queue.shift();
    count++;
    const toEnqueue = adjacency[selected];
    if (toEnqueue) {
      for (let i = 0; i < toEnqueue.length; i++) {
        indegrees[toEnqueue[i]]--;
        if (indegrees[toEnqueue[i]] === 0) {
          queue.push(toEnqueue[i]);
        }
      }
    }
  }

  return count === numCourses;
};
