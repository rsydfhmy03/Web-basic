window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const menuToggle = document.querySelector(".toggle input");
const nav = document.querySelector("header ul");

menuToggle = document.addEventListener('click', function(){
	nav.classList.toggle('slide');
})