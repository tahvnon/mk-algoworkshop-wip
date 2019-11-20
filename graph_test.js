const finland = require('./src/graphOfFinland');
const Queue = require('./src/queue');

const helsinki = finland.getVertexByName('helsinki');
const oulu = finland.getVertexByName('oulu');
const kuopio = finland.getVertexByName('kuopio');
const vaasa = finland.getVertexByName('vaasa');
const lahti = finland.getVertexByName('lahti');
const mikkeli = finland.getVertexByName('mikkeli');
const pori = finland.getVertexByName('pori');

console.log(helsinki);

const STATE_UNVISITED = 0;
const STATE_CURRENTLY_BEING_VISITED = 1;
const STATE_VISITED = 2;

function shortestPath(path, start, goal) {
  const stack = [];
  let vertex = path[goal.ordinal];
  while (vertex !== start.ordinal) {
    stack.push(vertex);
    vertex = path[vertex];
  }

  return [start.ordinal, ...stack.reverse(), goal.ordinal];
}

function bellmanFord(G, start) {
  const NUMBER_OF_VERTICES = G.getVertices().length;
  const distances = new Array(NUMBER_OF_VERTICES);
  const path = new Array(NUMBER_OF_VERTICES);
  for (let i = 0; i < NUMBER_OF_VERTICES; i++) {
    distances[i] = 0xffffffff;
  }
  distances[start.ordinal] = 0;
}
function bfs(G, startVertex) {
  const NUMBER_OF_VERTICES = G.getVertices().length;
  const distances = new Array(NUMBER_OF_VERTICES);
  const path = new Array(NUMBER_OF_VERTICES);
  const state = new Array(NUMBER_OF_VERTICES);
  const q = new Queue();

  for (let i = 0; i < NUMBER_OF_VERTICES; i++) {
    state[i] = STATE_UNVISITED;
  }

  state[startVertex.ordinal] = STATE_CURRENTLY_BEING_VISITED;
  distances[startVertex.ordinal] = 0;
  q.enqueue(startVertex);
  while (q.isEmpty() === false) {
    let currentVertex = q.dequeue();
    for (let i = 0; i < currentVertex.edges.length; i++) {
      let adjacentVertex = G.getVertexByName(currentVertex.edges[i].name);
      if (state[adjacentVertex.ordinal] === STATE_UNVISITED) {
        state[adjacentVertex.ordinal] = STATE_CURRENTLY_BEING_VISITED;
        distances[adjacentVertex.ordinal] =
          distances[currentVertex.ordinal] + 1;
        path[adjacentVertex.ordinal] = currentVertex.ordinal;
        q.enqueue(adjacentVertex);
      }
      state[currentVertex.ordinal] = STATE_VISITED;
    }
  }
  return { distances: distances, path: path };
}

var res = bfs(finland, mikkeli);
console.log(
  shortestPath(res.path, mikkeli, pori).map(
    e => finland.getVertexByOrdinal(e).name
  )
);
