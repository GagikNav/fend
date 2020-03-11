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

//$ write a function that makes a button witch
//$ on click it will jump to top!

const createButton = () => {
	// dom element for button
	let button = document.createElement('button');
	button.innerHTML = 'Go To Top';
	button.classList = 'btn';
	button.id = 'btn';
	button.setAttribute('onclick', 'goToTop()');
	document.body.appendChild(button);
};

//$ this function after clicking the button scrolls to the top

const goToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
		/* this peace of code smooths the scrolling with css
	// this function adds a class to the <HTML> tag then scrolls top after that removes class
	//  in order to smooth scrolling
	// htmlElement.className = 'smoothScroll';
	//document.body.scrollTop = 0;
	// document.documentElement.scrollTop = 0;
	// htmlElement.classList.remove('smoothScroll');
	*/
	});
};

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
	link = document.querySelectorAll('.menu__link');

	//finding each link for click and listen to it
	for (let i = 0; i < link.length; i++) {
		link[i].addEventListener('click', function(e) {
			e.preventDefault();
			//defining variable for each section name
			//? it has a limitation of names to "Section + number" =================> should review again!!!
			let secnum = i + 1;
			let sc = document.getElementById('section' + secnum);

			//defining scroll to the designated section
			// And there is a timeout function present for better experience
			setTimeout(() => {
				sc.scrollIntoView({
					block: 'start',
					behavior: 'smooth'
				});
			}, 150);
		});
	}
}

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

//create Button and on click calls goToTop function
createButton();

window.onscroll = () => {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById('btn').style.display = 'block';
	} else {
		document.getElementById('btn').style.display = 'none';
	}
};
