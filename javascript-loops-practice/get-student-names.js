/* exported getStudentNames */
function getStudentNames (students) {
  var results = [];
  for (var i = 0; i < students.length; i++) {
    results.push(students[i].name)
  }
  return results
}
