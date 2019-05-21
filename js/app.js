window.onscroll = function() {
    const nav = document.getElementById('nav');
    if ( window.pageYOffset > 100 ) {
      // set some sort of function to fade? Try something else?
        nav.classList.add("navbar1");
    } else {
        nav.classList.remove("navbar1");
    }
}
