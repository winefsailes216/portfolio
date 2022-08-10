// Sticky header nav bar
const header = document.querySelector('header');

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY >0)

});
// end Sticky header nav bar

//Responsive NAV
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
//end Responsive NAV

//Scroll reveal
const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.text,.social',{delay:300, origin:'bottom'})
sr.reveal('.header',{delay:200, origin:'top'})

sr.reveal('.sub-service,.about,.portfolio,.service,.contact,.footer',{delay:100, origin:'bottom'})
// end Scroll reveal



