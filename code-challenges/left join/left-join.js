'use strict';

const leftJoin = (mapOne, mapTwo) => {
  if (!mapOne.size && !mapTwo.size) {
    return [];
  }
  const allJoins = [];
  for (let [key, value] of mapOne) {
    let joinArray = [];
    joinArray.push(key, value);
    mapTwo.has(key) ? joinArray.push(mapTwo.get(key)) : joinArray.push(null);
    allJoins.push(joinArray);
  }
  return allJoins;
}

module.exports = leftJoin;
