/**
 * Validate email address submission for mailchimp
 * add `success` or `error` classes to <form>
 */
import validator from 'email-validator';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = document.querySelector('[type=text]').value;
	const valid = validator.validate(email);
	const theResult = (valid) ? 'success' : 'error';

	form.classList.remove('success', 'error');
	form.classList.add(theResult);

	// change submit button to confirmation for better ux
	if (valid) {
		document.querySelector('[type=submit]').innerText = 'Joined ✓';
	}
});
