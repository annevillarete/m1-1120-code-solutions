var $openModalClick = document.querySelector('.open-modal');
var $background = document.querySelector('.background');
var $popUp = document.querySelector('.pop-up-hidden');
var $popUpQuestion = document.querySelector('.pop-up-question-hidden');
var $noButton = document.querySelector('.no-hidden');

$openModalClick.addEventListener('click', function (event) {
  if ($openModalClick.className === 'open-modal') {
    $openModalClick.className = 'open-modal-w-pop-up';
    $background.className = 'pop-up-background';
    $popUp.className = 'pop-up-display';
    $popUpQuestion.className = 'pop-up-question-display';
    $noButton.className = 'no-displayed';

  }
});

$noButton.addEventListener('click', function (event) {
  if ($noButton.className === 'no-displayed') {
    $openModalClick.className = 'open-modal';
    $background.className = 'background';
    $popUp.className = 'pop-up-hidden';
    $popUpQuestion.className = 'pop-up-question-hidden';
    $noButton.className = 'no-hidden';

  }
});
