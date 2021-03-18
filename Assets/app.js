// Adds the rotate animation class to the mobile nav
function rotate(){
    document.getElementById('mobileNav').classList.toggle("mobile-nav-animate");  
    document.getElementById('mobileNav').classList.toggle("mobile-nav-animate-out");  
    document.getElementById('menu').classList.toggle("menu-animate");
    document.getElementById('menu').classList.toggle("menu-animate-out");
}

//Year Updater
let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;