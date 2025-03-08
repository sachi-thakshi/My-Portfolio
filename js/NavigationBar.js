 // Get references to the burger menu and navigation
 const burger = document.getElementById('burger');
 const nav = document.getElementById('nav');

 // Toggle the 'active' class on click
 burger.addEventListener('click', () => {
 nav.classList.toggle('active');
 });