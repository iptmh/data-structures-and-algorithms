const Graph = require('./getEdge')

describe('Graph', () => {
  let graph

  beforeEach(() => {
    graph = new Graph();
  })

  describe('direct flights', () => {

    it('can show direct flights with dollar amount', () => {
      graph.addNode('Pandora');
      graph.addNode('Metroville')
      graph.addNode('Arendell');
      graph.addNode('Narnia')
      graph.addNode('Naboo');
      graph.addEdge('Pandora', 'Metroville', 82);
      graph.addEdge('Arendell', 'Metroville', 99);
      graph.addEdge('Narnia', 'Naboo', 250);

      expect(graph.adjacencyList.get('Pandora')).toEqual([{ 'Metroville': 82 }])
      expect(graph.adjacencyList.get('Arendell')).toEqual([{ 'Metroville': 99 }])
      expect(graph.adjacencyList.get('Narnia')).toEqual([{ 'Naboo': 250 }])
    })

    it('shows no flight available if there is no city in the graph', () => {
      expect(graph.getNodes()).toEqual('no flight available');
    })
  })

  describe('getNeighbors()', () => {

    it('returns all direct flights from each city with dollar amount', () => {
      graph.addNode('Pandora');
      graph.addNode('Metroville')
      graph.addNode('Arendell');
      graph.addNode('Narnia')
      graph.addNode('Naboo');

      graph.addEdge('Pandora', 'Metroville', 'True : 82');
      graph.addEdge('Pandora', 'Arendell', 'True : 150');
      graph.addEdge('Narnia', 'Naboo', 'False : 0');

      expect(graph.getNeighbors('Pandora')).toEqual([{ 'Metroville': 'True : 82' }, { 'Arendell': 'True : 150' }]);
      expect(graph.getNeighbors('Metroville')).toEqual([{ 'Pandora': 'True : 82' }]);
      expect(graph.getNeighbors('Arendell')).toEqual([{ 'Pandora': 'True : 150' }]);
      expect(graph.getNeighbors('Narnia')).toEqual([{ 'Naboo': 'False : 0' }]);
    })
  })
})

