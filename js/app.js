// in mobile layout, fade sticky navbar while scrolling down

window.onscroll = function() {
  if ($('body').is('.aboutPage')) {
    const nav = document.getElementById('nav');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("navbar1");
    } else {
        nav.classList.remove("navbar1");
    }
  }
}
