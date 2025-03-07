/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
      const graph = new Array(numCourses).fill(0).map(()=>[]);
      const indegree = new Array(numCourses).fill(0);

      for(let [pre, course] of prerequisites){
        graph[pre].push(course);
        indegree[course]++;
      }
      const queue = [];
      let learned = 0;
      for(let i = 0;i<numCourses;i++){                    
        if(indegree[i] === 0){
          queue.push(i);
        }
      }

      while(queue.length){
        const course = queue.shift();
        learned++;
        for(let i = 0;i<graph[course].length;i++){
          indegree[graph[course][i]]--;
          if(indegree[graph[course][i]] === 0){
            queue.push(graph[course][i]);
          }
        }
      }

      if(learned === numCourses) return true
      else return false; 

};