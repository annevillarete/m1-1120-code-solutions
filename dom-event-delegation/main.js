var $clickTaskList = document.querySelector('.task-list');
// var $closestElement = $clickTaskList.closest('.task-list');

$clickTaskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.name:', event.target.tagName);

  if (event.target && event.target.name === 'button') {
    // List item found!  Output the ID!
    console.log(event.target.$closestElement);
  }
});
