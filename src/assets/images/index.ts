function ShortestPath(strArr: string[]): string | number {
  const nodeCount = Number(strArr.shift());
  const nodes = strArr.splice(0, nodeCount);
  const connections = strArr.map((v) => v.split("-"));
  const startNode = nodes[0];
  const endNode = nodes[nodes.length - 1];

  const bestPath = `${startNode}-${endNode}`;
  if (strArr.indexOf(bestPath) !== -1) {
    return bestPath;
  }

  const paths: string[][] = [];
  findPaths([startNode]);

  function findPaths(pathSoFar: string[]) {
    const currentNode = pathSoFar[pathSoFar.length - 1];
    if (currentNode === endNode) {
      paths.push([...pathSoFar]);
      return;
    }

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (currentNode === connection[0] || currentNode === connection[1]) {
        const nextNode =
          currentNode === connection[0] ? connection[1] : connection[0];
        if (pathSoFar.indexOf(nextNode) === -1) {
          pathSoFar.push(nextNode);
          findPaths([...pathSoFar]);
          pathSoFar.pop();
        }
      }
    }
  }

  const shortestPathNodes = paths.sort((a, b) => b.length - a.length).pop();
  if (shortestPathNodes) {
    return shortestPathNodes.join("-");
  } else {
    return -1;
  }
}
