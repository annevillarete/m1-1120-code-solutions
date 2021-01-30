/* exported filterOutStrings */
function filterOutStrings (array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string')
   {results.push(array[i])}
  }
  return results
}
