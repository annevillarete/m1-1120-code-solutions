var $buttonClick = document.querySelector('.light-bulb');
var $background = document.querySelector('.background');

$buttonClick.addEventListener('click', function (event) {
  if ($buttonClick.className === 'light-bulb') {
    $buttonClick.className = 'light-bulb-on';
    $background.className = 'background-on';

  } else {
    $buttonClick.className = 'light-bulb';
    $background.className = 'background';
  }
});
