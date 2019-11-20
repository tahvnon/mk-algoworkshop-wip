const GraphM = require('./graphM');
const Queue = require('./queue');
const finland = new GraphM();

finland.addVertice('helsinki', { lahti: 99, turku: 151, tampere: 161 });

finland.addVertice('turku', { helsinki: 151, tampere: 142, pori: 118 });
finland.addVertice('pori', { tampere: 104, turku: 118, vaasa: 180 });
finland.addVertice('vaasa', { oulu: 284, pori: 180 });
finland.addVertice('oulu', { jyvaskyla: 309, vaasa: 284 });
finland.addVertice('jyvaskyla', {
  kuopio: 123,
  lahti: 141,
  tampere: 133,
  oulu: 309
});
finland.addVertice('kuopio', { mikkeli: 136, jyvaskyla: 123 });
finland.addVertice('mikkeli', { kuopio: 136, lahti: 177 });
finland.addVertice('lahti', { mikkeli: 177, jyvaskyla: 141, helsinki: 99 });
finland.addVertice('tampere', {
  helsinki: 161,
  turku: 142,
  pori: 104,
  jyvaskyla: 133
});

module.exports = finland;
