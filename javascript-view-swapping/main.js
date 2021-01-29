var $container = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$container.addEventListener('click', function (event) {

  if (!event.target && event.target.matches('.tab')) {
       return;
     }
       for (var i = 0; i < $tab.length; i++) {
         if ($tab[i] === event.target) {
           $tab[i].className = 'tab active';
          } else {
            $tab[i].className = 'tab';
      }}

var $dataView = event.target.getAttribute('data-view');

for (var i = 0; i < $view.length; i++) {
  if ($view[i].getAttribute('data-view') !==$dataView) {
    $view[i].className = 'view hidden';
  } else {
    $view[i].className = 'view';
  }
}
});
