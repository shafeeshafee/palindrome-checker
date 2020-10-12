const input = document.querySelector("#submission");
const button = document.querySelector("button");
const display = document.querySelector("#display");
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

const fill = () => {
	if (input.value !== '') {
		let word = input.value.toLowerCase().replace(regex, '').replace(/\s+/g, '');
		let reversed = word.split("").reverse().join("").replace(regex, '').replace(/\s+/g, '');
		let displayWord = input.value;

		display.className = '';
		input.value = '';

		if (word === reversed) {
			display.classList.add("is-palindrome");
			display.innerText = `'${displayWord}' is a palindrome!`
		} else {
			display.classList.add("is-not-palindrome");
			display.innerText = `'${displayWord}' is NOT a palindrome!`
		}
	} else {
		display.classList.add('shake')
		display.innerText = "Enter a word first!"
	}
}

button.addEventListener('click', () => {
	fill();
})

input.addEventListener('keypress', (e) => {
	e.key === 'Enter' ? fill() : 0;
})