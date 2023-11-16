/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let preMap = {}

    for (let i = 0; i < prerequisites.length; i++) {
        if (preMap[prerequisites[i][0]]) {
            preMap[prerequisites[i][0]].push(prerequisites[i][1])
        }
        else {
            preMap[prerequisites[i][0]] = [prerequisites[i][1]]
        }
    }

    let visited = new Set()

    function dfs(node) {
        if (visited[node]) {
            return false
        }

        if (preMap[node]) {
            if (preMap[node] === []) {
                return true
            }

            visited[node] = true

            for (let val of preMap[node]) {
                if (!dfs(val)) {
                    return false
                }
            }

            visited[node] = false
            preMap[node] = []
        }

        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false
        }
    }

    return true
};