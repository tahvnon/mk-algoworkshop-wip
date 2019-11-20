module.exports = function() {
  let vertices = [];

  return {
    getVertexByOrdinal: function(n) {
      return vertices[n];
    },
    getVertexByName: function(name) {
      // fixme - this should throw an exception if the named vertice is not found!
      return this.getVertexByOrdinal(vertices.findIndex(v => v.name === name));
    },
    addVertice: function(v) {
      v.ordinal = v.ordinal | vertices.length;
      vertices.push(v);
    },
    getVertices: function() {
      return vertices;
    },
    getEdgeWeightByOrdinals: function(o1, o2) {
      const maybeVertex1 = this.getVertexByOrdinal(o1);
      const maybeVertex2 = this.getVertexByOrdinal(o2);
      if (!maybeVertex1 || !maybeVertex2) return undefined;
      const maybeEdge = maybeVertex1.edges.find(
        e => e.name === maybeVertex2.name
      );
      return maybeEdge ? maybeEdge.weight : undefined;
    },
    getEdgeWeightByNames: function(n1, n2) {
      const maybeVertex1 = this.getVertexByName(n1);
      const maybeVertex2 = this.getVertexByName(n2);
      if (!maybeVertex1 || !maybeVertex2) return undefined;
      const maybeEdge = maybeVertex1.edges.find(
        e => e.name === maybeVertex2.name
      );
      return maybeEdge ? maybeEdge.weight : undefined;
    }
  };
};
