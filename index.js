// Add your functions here
function map(array, mapFunction) {
  let results = []
  for (let element of array) {
    results.push(mapFunction(element))
  }
  return results
}

function reduce(array, reduceFunction, starting) {
  let element = (!!starting) ? starting : array[0]
  let i = (!!starting) ? 0 : 1
  for (; i < array.length; i++) {
    element = reduceFunction(array[i], element)
  }
  return element
}