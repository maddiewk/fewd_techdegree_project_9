$(document).ready(function() {
  $('#fade').fadeIn(1800);
  $('#fade2').fadeIn(6000);
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

// load separate content without reloading the entire page
// const contentWrapper = document.querySelector('.testport');
// $('.testabout').on('click', function() {
//   contentWrapper.innerHTML = about;
// });
