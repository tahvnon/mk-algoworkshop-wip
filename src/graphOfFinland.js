const Graph = require('./graphM');
const finland = new Graph();

finland.addVertex('helsinki', [
  { name: 'lahti', weight: 99 },
  { name: 'turku', weight: 151 },
  { name: 'tampere', weight: 161 }
]);
finland.addVertex('turku', [
  { name: 'helsinki', weight: 151 },
  { name: 'tampere', weight: 142 },
  { name: 'pori', weight: 118 }
]);
finland.addVertex('pori', [
  { name: 'tampere', weight: 104 },
  { name: 'turku', weight: 118 },
  { name: 'vaasa', weight: 180 }
]);
finland.addVertex('vaasa', [
  { name: 'oulu', weight: 284 },
  { name: 'pori', weight: 180 }
]);
finland.addVertex('oulu', [
  { name: 'jyvaskyla', weight: 309 },
  { name: 'vaasa', weight: 284 }
]);
finland.addVertex('jyvaskyla', [
  { name: 'kuopio', weight: 123 },
  { name: 'lahti', weight: 141 },
  { name: 'tampere', weight: 133 },
  { name: 'oulu', weight: 309 }
]);

finland.addVertex('kuopio', [
  { name: 'mikkeli', weight: 136 },
  { name: 'jyvaskyla', weight: 123 }
]);
finland.addVertex('mikkeli', [
  { name: 'kuopio', weight: 136 },
  { name: 'lahti', weight: 177 }
]);
finland.addVertex('lahti', [
  { name: 'mikkeli', weight: 177 },
  { name: 'jyvaskyla', weight: 141 }
]);
finland.addVertex('tampere', [
  { name: 'helsinki', weight: 161 },
  { name: 'turku', weight: 142 },
  { name: 'pori', weight: 104 },
  { name: 'jyvaskyla', weight: 133 }
]);
module.exports = finland;
