// in mobile layout, fade sticky navbar while scrolling down

// window.onscroll = function() {
//   if ($('body').is('.aboutPage')) {
//     const nav = document.getElementById('nav');
//     if ( window.pageYOffset > 100 ) {
//         nav.classList.add("navbar1");
//     } else {
//         nav.classList.remove("navbar1");
//     }
//   }
// }

$(document).ready(function() {
  $('#fade').fadeIn(1800);
  $('#fade2').fadeIn(6000);
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
