var $hotButtonClick = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
var numberOfClicks = 0;

function clickButton() {
  numberOfClicks++;
  var temperature;

  if (numberOfClicks < 4) {
    temperature = 'cold';
  } else if (numberOfClicks < 7) {
    temperature = 'cool';
  } else if (numberOfClicks < 10) {
    temperature = 'tepid';
  } else if (numberOfClicks < 13) {
    temperature = 'warm';
  } else if (numberOfClicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }

  $hotButtonClick.className = 'hot-button ' + temperature;
  $clickCount.textContent = 'Clicks: ' + numberOfClicks;

}

$hotButtonClick.addEventListener('click', clickButton);
