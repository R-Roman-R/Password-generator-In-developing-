function getRandomNumber(max){
	return Math.round(Math.random() * max);			
}

function getPassword() { 

	let checkNum = document.getElementById("numbers");
	let checkSumb = document.getElementById("symbols");
	let checkUpperCase = document.getElementById("upperCase");
	let all = document.querySelectorAll('.empty');


	for (let empt of all) {
		let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		if(checkNum.checked) {
			alphabet.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
		} 
		if(checkSumb.checked) {
			alphabet.push("_", "|", "/", "*", "$", "%", "&", ")", "(", "#", "!", "\\", "?", "~", "№", "^");
		}
		if(upperCase.checked) {
			alphabet.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
		}
		let numbers = +document.getElementById("userAnswer").value;
			if (numbers >= 33) {
				alert('Внимание!\nДлинна пароля не должна быть больше 33 символов.');
				break;
			}

		let text = "";

		for(let i = 0; i < numbers; i++){
			let n = getRandomNumber(alphabet.length - 1);
			text += alphabet[n];
			}
			
		empt.innerHTML = text;
	}	
}

function greenTheme() {
	let greenBackground = document.querySelector('.background');
	let formTheme = document.querySelectorAll('.theme');
		for (let themeContainer of formTheme) {
		themeContainer.classList.toggle('formGreenBackground');
	};
	greenBackground.classList.toggle('backgroundGreen');
}





