// get the element to be stuck
const scrollIcon = document.querySelector('.icon--down');
const prllx = document.querySelector('.prllx');
const prllxContent = document.querySelector('.prllx__content');

// slow yo role
function debounce(func, wait = 4, immediate = true) {
	let timeout;
	return function() {
		const context = this;
		const args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate)
				func.apply(context, arguments);
			};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow)
			func.apply(context, arguments);
		};
}

// on debounce scroll
prllx.addEventListener('scroll', debounce(() => {
	// get the viewport
	const elem = document.documentElement || document.body;
	const viewportHeight = elem.clientHeight;

	// get current scroll pos
	const scrollPos = prllxContent.getBoundingClientRect();

	const limit = viewportHeight - 100;

	if (scrollPos.top < limit) {
		scrollIcon.classList.add('hide');
	} else {
		scrollIcon.classList.remove('hide');
	}
}));
