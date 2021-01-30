/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage')
console.log(previousTodosJSON)
if (previousTodosJSON !== null){
todos = JSON.parse(previousTodosJSON)
console.log(previousTodosJSON)
}


window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON)

});
