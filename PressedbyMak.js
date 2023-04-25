//Hamburger menu transition//
const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('active');
        navmenu.classList.toggle('active');
    })

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}))

//Sticky Navbar//
const navbar = document.querySelector('navbar');
let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);

