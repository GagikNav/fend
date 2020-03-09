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
function navClick() {
	let navbarLinks = document.getElementsByClassName('menu__link');
	navbarLinks.addEventListener('click', function(e) {
		const goTo = document.querySelector('#' + e.target.section.id);
		// goTo.scrollIntoView({ behavior: 'smooth' });
	});
}

let clickLink = () => {};
//
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//

//* Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addNavbar();
//Adds each section to the navbar

// Scroll to section on link click
navClick();
// Set sections as active
