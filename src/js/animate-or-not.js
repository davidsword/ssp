/**
 * See if we're using the parallax CSS transforms or not
 * Check if IE/Edge, check the viewports init and on resize
 */
import debounce from 'debounce';
import { detect } from 'detect-browser';

const browser = detect();
const browserDtctd = browser && browser.name;
const docBody = document.querySelector('body');
const elem = document.documentElement || document.body;

if (browserDtctd) {
	docBody.classList.add(`browser-${browser.name}`);
}

// MS doesn't do `transform translateZ` well
const badBrowser = (browserDtctd && (browser.name === 'edge' || browser.name === 'ie'));

function resize() {
	// get the viewport
	const viewportHeight = elem.clientHeight;
	const viewportWidth = elem.clientWidth;

	// smaller than either of these bounds, the animation doesn't work right
	if (badBrowser || viewportWidth < 780 || viewportHeight < 680) {
		docBody.classList.add('disable-awesome-animation');
	} else {
		docBody.classList.remove('disable-awesome-animation');
	}
}

// fire on resize
window.addEventListener('resize', debounce(resize, 50));

// fire on init
resize();
