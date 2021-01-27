var $clickTaskList = document.querySelector('.task-list');

$clickTaskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.name:', event.target.tagName);


  if (event.target && event.target.tagName === 'BUTTON') {
    // List item found!  Output the ID!
    var $closestElement = event.target.closest('.task-list-item');
    console.log($closestElement);
    $closestElement.remove();


  }
});
