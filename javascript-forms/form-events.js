var $nameField = document.getElementById('user-name');
var $emailField = document.getElementById('user-email');
var $textArea = document.getElementById('user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

$nameField.addEventListener('focus', handleFocus);
$emailField.addEventListener('focus', handleFocus);
$textArea.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

$nameField.addEventListener('blur', handleBlur);
$emailField.addEventListener('blur', handleBlur);
$textArea.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log('value:', event.target.value);
}

$nameField.addEventListener('input', handleInput);
$emailField.addEventListener('input', handleInput);
$textArea.addEventListener('input', handleInput);
