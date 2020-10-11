const input = document.querySelector("#submission");
const button = document.querySelector("button");
const display = document.querySelector("#display");


const fill = () => {
	if (input.value !== '') {
		let word = input.value.toLowerCase(), displayWord = input.value;

		const reversed = word.split("").reverse().join("");

		display.className = '';
		input.value = '';

		if (reversed === word) {
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