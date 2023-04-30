/* -------------------------------- preloader ------------------------------- */
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
	loader.style.display = "none";
});

const counter = document.querySelectorAll("counter");
const speed = 200;
counter.forEach(function () {});

/* ------------------------------ copyright date ------------------------------ */
let fullYear = new Date().getFullYear();
document.querySelector(".date").textContent = fullYear;

/* ---------------------------- totop/navbarcolor --------------------------- */
const toTop = document.querySelector(".top");
const nav = document.querySelector(".navi");

window.addEventListener("scroll", function () {
	const scrnHeight = window.pageYOffset;
	const navHeight = nav.getBoundingClientRect().height;

	if (scrnHeight > navHeight) {
		nav.classList.add("stick");
	} else {
		nav.classList.remove("stick");
	}

	if (scrnHeight > 500) {
		toTop.classList.add("toplink");
	} else {
		toTop.classList.remove("toplink");
	}
});

/* ------------------------------ toggleNavBar ------------------------------ */
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const links = document.querySelectorAll(".links")

hamburger.addEventListener('click', function(){
	hamburger.classList.toggle("active");
	menu.classList.toggle("tog");
});

links.forEach(function(n){
	n.addEventListener('click', function(){
		hamburger.classList.remove("active");
		menu.classList.remove("toggle");
	});
});

