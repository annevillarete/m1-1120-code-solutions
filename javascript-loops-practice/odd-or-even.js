/* exported oddOrEven */
function oddOrEven (array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      results.push('even')
    } else {
      results.push('odd')
    }
  }
  return results;
}
