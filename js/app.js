$(document).ready(function() {
  $('.fadePage').fadeIn(1800);
  $('#fade2').fadeIn(4000); 
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$('.burger').on('click', function() {
  openNav();
});

$('.closebtn').on('click', function() {
  closeNav();
});

// form validation for contact page

$appendDiv = $('#dynamic');
$name = $('.name');
$email = $('.email');
$phone = $('.phone');
$message = $('.input-large');

$('.input-submit').on('click', function(e) {
  e.preventDefault();
  $appendDiv.css('display', 'block');
  $appendDiv.html('');
  if ($name.val() === '' || $email.val() === '' || $message.val() === '') {
    $appendDiv.delay(3000).append(`<span class="alert-message">Please fill in required fields.</span>`).slideDown(1500).removeClass('alert-hidden').hide(1000);
  } else {
    $appendDiv.delay(3000).append(`<span class="success-message">Your message has been sent.</span>`).slideDown(1500).removeClass('alert-hidden').hide(1000);
    $name.val('');
    $email.val('');
    $phone.val('');
    $message.val('');
  }

});
