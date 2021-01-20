var $characters = document.querySelectorAll('span');
var index = 0;
var currentLetter = $characters[index];

document.addEventListener('keydown', function (event) {
  if (event.key === currentLetter.textContent) {
    currentLetter.className = 'typing-default typing-correct';
    index++;
    currentLetter = $characters[index];
    currentLetter.className = 'typing-default typing-border';
  } else {
    currentLetter.className = 'typing-default typing-incorrect typing-border';

  }

});
