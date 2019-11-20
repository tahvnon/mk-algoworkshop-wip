const Graph = require('./graph');
const finland = new Graph();

finland.addVertice({
  name: 'helsinki',
  edges: [
    { name: 'lahti', weight: 99 },
    { name: 'turku', weight: 151 },
    { name: 'tampere', weight: 161 }
  ]
});
finland.addVertice({
  name: 'turku',
  edges: [
    { name: 'helsinki', weight: 151 },
    { name: 'tampere', weight: 142 },
    { name: 'pori', weight: 118 }
  ]
});
finland.addVertice({
  name: 'pori',
  edges: [
    { name: 'tampere', weight: 104 },
    { name: 'turku', weight: 118 },
    { name: 'vaasa', weight: 180 }
  ]
});
finland.addVertice({
  name: 'vaasa',
  edges: [{ name: 'oulu', weight: 284 }, { name: 'pori', weight: 180 }]
});
finland.addVertice({
  name: 'oulu',
  edges: [{ name: 'jyvaskyla', weight: 309 }, { name: 'vaasa', weight: 284 }]
});
finland.addVertice({
  name: 'jyvaskyla',
  edges: [
    { name: 'kuopio', weight: 123 },
    { name: 'lahti', weight: 141 },
    { name: 'tampere', weight: 133 },
    { name: 'oulu', weight: 309 }
  ]
});
finland.addVertice({
  name: 'kuopio',
  edges: [{ name: 'mikkeli', weight: 136 }, { name: 'jyvaskyla', weight: 123 }]
});
finland.addVertice({
  name: 'mikkeli',
  edges: [{ name: 'kuopio', weight: 136 }, { name: 'lahti', weight: 177 }]
});
finland.addVertice({
  name: 'lahti',
  edges: [{ name: 'mikkeli', weight: 177 }, { name: 'jyvaskyla', weight: 141 }]
});
finland.addVertice({
  name: 'tampere',
  edges: [
    { name: 'helsinki', weight: 161 },
    { name: 'turku', weight: 142 },
    { name: 'pori', weight: 104 },
    { name: 'jyvaskyla', weight: 133 }
  ]
});
module.exports = finland;
