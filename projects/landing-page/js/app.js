// console.log('connected');

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let sections = document.querySelectorAll('section');
let navbar = document.getElementById('navbar__list');

/**
 * End Global Variables*/

/* Start Helper Functions
 */

//$ write a function that makes a button which
//$ on click it will jump to top!

const createButton = () => {
	// dom element for button
	let button = document.createElement('button');
	button.innerHTML = 'Go To Top';
	button.id = 'btn';
	button.setAttribute('onclick', 'goToTop()');
	document.body.appendChild(button);
};

//$ this function after clicking the button scrolls to the top

const goToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
};
/* this pice of code smooths the scrolling with css
// this function adds a class to the <HTML> tag then scrolls top after that removes class
//  in order to smooth scrolling
// htmlElement.className = 'smoothScroll';
//document.body.scrollTop = 0;
// document.documentElement.scrollTop = 0;
// htmlElement.classList.remove('smoothScroll');
*/

//$ this function adds "li" an "a" correspond to each section
let addNavbar = () => {
	for (let section of sections) {
		const navbarItems = document.createElement('li');
		const navbarLinks = document.createElement('a');
		navbarItems.dataset.link = section.id;
		navbarLinks.classList = 'menu__link';
		navbarLinks.innerHTML = section.dataset.nav;
		navbarLinks.setAttribute('href', '#');
		navbar.appendChild(navbarItems);
		navbarItems.appendChild(navbarLinks);
	}
};

/**
 * End Helper Functions
 *
 *
 * Begin Main Functions
 *
 */

//$ Function for clicking each navBar Link with a listener of class

function navBarClick() {
	//finding each link for click and listen to it
	link = document.querySelectorAll('.menu__link');
	for (let i = 0; i < link.length; i++) {
		link[i].addEventListener('click', function(e) {
			e.preventDefault();
			//defining variable for each section name
			//? it has a limitation of names to "Section + number" =================> should review again!!!
			let secnum = i + 1;
			let sc = document.getElementById(`section${secnum}`);

			//defining scroll to the designated section
			sc.scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		});
	}
}
// !===================================================================================
//! Screen observing section

//$ this function returns element position
function getOffset(el) {
	const pos = el.getBoundingClientRect();
	return {
		left: pos.left + window.scrollX,
		top: pos.top + window.scrollY,
		bottom: pos.bottom + window.scrollY,
		height: pos.height + window.scrollY
	};
}
let = numberOfSections = document.querySelectorAll('section');
let maibHeroHeight = getOffset(document.querySelector('.main__hero')).height;
let offsetArrayTop = [];
let offsetArrayBottom = [];
let offsetArrayHeight = [];
for (let i = 0; i < numberOfSections.length; i++) {
	let sectionElement = document.getElementById(`section${i + 1}`);
	offsetArrayTop[i] = getOffset(sectionElement).top;
	offsetArrayBottom[i] = getOffset(sectionElement).bottom;
	offsetArrayHeight[i] = getOffset(sectionElement).height;
}

//$ this function changes your-active-class every time correspondent section appears
const observer = () => {
	window.addEventListener('scroll', () => {
		for (let i = 0; i < numberOfSections.length; i++) {
			if (
				//// Make 200 px dynamic!!
				window.pageYOffset + maibHeroHeight / 1 > offsetArrayTop[i] &&
				window.pageYOffset + innerHeight / 6 < offsetArrayBottom[i]
			) {
				if (
					document
						.getElementById(`section${i + 1}`)
						.classList.contains('your-active-class')
				) {
					console.log(document.getElementById(`section${i + 1}`).id);
				} else {
					document
						.getElementById(`section${i + 1}`)
						.classList.toggle('your-active-class');
					document.getElementById(`section${i + 1}`).className =
						'your-active-class';
				}
			} else {
				document
					.getElementById(`section${i + 1}`)
					.classList.remove('your-active-class');
			}
		}
	});
};

//!============================================================
//$ This is a Observer API code I rather write my own function
/*
var observer = new IntersectionObserver(
	function(entries) {
		if (entries[0].isIntersecting === true)
		console.log('Element is fully visible in screen');
	},
	{ threshold: [0.5] }
	);
	console.log(entries[0]);
	
	observer.observe(document.querySelector('#section3'));
	*/
//!============================================================
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
//Adds each section to the navbar
addNavbar();

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
navBarClick();

// Set sections as active
//* Add class 'active' to section when near top of viewport
observer();

//create Button and on click calls goToTop function
createButton();

// An event listener to check wether show the button
window.onscroll = () => {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById('btn').style.display = 'block';
	} else {
		document.getElementById('btn').style.display = 'none';
	}
};
