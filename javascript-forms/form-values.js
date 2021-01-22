var $contactForm = document.getElementById('contact-form');

$contactForm.addEventListener('submit', sendForm);

function sendForm(event) {
  event.preventDefault();
  var $name = $contactForm.elements.name.value;
  var $email = $contactForm.elements.email.value;
  var $message = $contactForm.elements.message.value;
  var formValues = {
    name: $name,
    email: $email,
    message: $message
  };
  console.log('messageData:', formValues);

}
