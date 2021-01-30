/* exported addSuffixToAll */
function addSuffixToAll (words, suffix) {
  var results = [];

  for (var i = 0; i < words.length; i++) {
    results.push(words[i] + suffix)
  }
  return results
}
