/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let visiting = new Set() // is being explored
    let visited = new Set() // is already explored
    let graph = new Map()

    const DFS = (v) => {
        visiting.add(v)

        // get all the edges to explore
        let edges = graph.get(v)

        if (edges) {
            // console.log(edges)
            for (let e of edges) {
                // skip if it is explored already
                if (visited.has(e)) continue

                // found e is being explored
                if (visiting.has(e)) return true

                // DFS deeper if this e is cyclic
                if (DFS(e)) return true
            }
        }

        // remove from visiting set when all decedent v are visited
        visiting.delete(v)
        visited.add(v)
        return false
    }

    for (let [v, e] of prerequisites) {
        if (graph.has(v)) {
            let edges = graph.get(v)
            edges.push(e)
            graph.set(v, edges)
        } else {
            graph.set(v, [e])
        }
    }

    for (const [v, e] of graph) {
        // if cyclic it will not finish so it is false
        if (DFS(v)) return false
    }

    return true
}
