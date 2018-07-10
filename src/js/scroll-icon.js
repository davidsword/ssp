import debounce from 'debounce';

// get the element to be stuck
const scrollIcon = document.querySelector('.icon--down');
const prllx = document.querySelector('.prllx');
const prllxContent = document.querySelector('.prllx__content');

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
}, 20));
