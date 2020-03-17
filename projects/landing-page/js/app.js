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

//$ Function to creat Go To Top  Button

const createButton = () => {
	// dom element for button
	let button = document.createElement('button');
	button.innerHTML = 'Go To Top';
	button.id = 'btn';
	button.setAttribute('onclick', 'goToTop()');
	document.body.appendChild(button);
};

//$  function for scrolling to the top via the button

const goToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
};

//$ this function finds the "n-th" list item to select

const findNthLi = n => {
	return document.querySelector('ul li:nth-child(' + n + ')');
};

//$ this function adds "li" and "a" correspond to each section in the navbar

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
	//$ add class to the first navbar

	findNthLi(1).className = 'navbarActiveClass';
};

/**
 * End Helper Functions*/

/* Begin Main Functions
 */

//$ Function for clicking each navBar Link with a listener of class

const navBarClick = () => {
	//finding each link for click and listen to it
	link = document.querySelectorAll('.menu__link');
	for (let i = 0; i < link.length; i++) {
		link[i].addEventListener('click', function(e) {
			e.preventDefault();
			//defining variable for each section name
			let sc = document.getElementById(`section${i + 1}`);
			//defining scroll to the designated section
			sc.scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		});
	}
};
//* An event listener to display / hide both the button and navbar

let scl1 = window.pageYOffset;
const btnNavbar = () => {
	window.onscroll = () => {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			document.getElementById('btn').style.display = 'block';
		} else {
			document.getElementById('btn').style.display = 'none';
		}
		let scl2 = window.pageYOffset;
		if (scl1 > scl2) {
			document.querySelector('header').style.top = '0';
		} else {
			document.querySelector('header').style.top = '-200px';
		}
		scl1 = scl2;
	};
};

//$An eventListener for hovering mouse on navbar and show / hide it.

const hoverMouse = () => {
	document
		.querySelector('.observerDivTop')
		.addEventListener('mouseover', mouseOver);
	document
		.querySelector('.observerDivTop')
		.addEventListener('mouseover', mouseOver);

	document
		.querySelector('.observerDivTop')
		.addEventListener('mouseout', mouseOut);

	function mouseOver() {
		document.querySelector('header').style.top = '0';
	}

	// time out has been set to 10 sec after hovering out
	function mouseOut() {
		setTimeout(() => {
			document.querySelector('header').style.top = '-200px';
		}, 10000);
	}
};
// !===================================================================================
//! Screen observing section
//*Tow Div added to the HTML to be index of page observer
//* and also listening to mouse hover

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
//*defining variables regarding page and elements offsets
let = numberOfSections = document.querySelectorAll('section');
let mainHeroHeight = getOffset(document.querySelector('.main__hero')).height;
let offsetArrayTop = [];
let offsetArrayBottom = [];
let offsetArrayHeight = [];
let observerDivTop = document.querySelector('.observerDivTop');
let observerDivBottom = document.querySelector('.observerDivBottom');
const header = document.querySelector('header');

//* this loop gets every section's offsets and puts them in a array
for (let i = 0; i < numberOfSections.length; i++) {
	let sectionElement = document.getElementById(`section${i + 1}`);
	offsetArrayTop[i] = getOffset(sectionElement).top;
	offsetArrayBottom[i] = getOffset(sectionElement).bottom;
	offsetArrayHeight[i] = getOffset(sectionElement).height;
}

//$ this function changes "your-active-class" every time respective section appears
const observer = () => {
	window.addEventListener('scroll', () => {
		for (let i = 0; i < numberOfSections.length; i++) {
			if (
				offsetArrayTop[i] < getOffset(observerDivTop).bottom &&
				offsetArrayTop[i] > getOffset(observerDivTop).top
			) {
				if (
					document
						.getElementById(`section${i + 1}`)
						.classList.contains('your-active-class')
				) {
				} else {
					document
						.getElementById(`section${i + 1}`)
						.classList.toggle('your-active-class');
					document.getElementById(`section${i + 1}`).className =
						'your-active-class';
					findNthLi(i + 1).className = 'navbarActiveClass';
				}
			} else {
				if (
					(offsetArrayTop[i + 1] < getOffset(observerDivTop).bottom &&
						offsetArrayTop[i + 1] > getOffset(observerDivTop).top) ||
					(offsetArrayTop[i] < getOffset(observerDivBottom).bottom &&
						offsetArrayTop[i] > getOffset(observerDivBottom).top)
				) {
					document
						.getElementById(`section${i + 1}`)
						.classList.remove('your-active-class');
					findNthLi(i + 1).classList.remove('navbarActiveClass');
				}
			}
		}
	});
};

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
hoverMouse();

// Set sections as active
//* Add class 'active' to section when near top of viewport
observer();

//create Button and on click calls goToTop function
createButton();
btnNavbar();
