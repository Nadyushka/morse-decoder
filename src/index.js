const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
	'5': ' ',
};

function decode(expr) {


	let firsfArr = [];
	let secondArr = [];
	let thirdArr = [];
	let final = [];



	for (let i = 0; i <= expr.length; i += 10) {
		firsfArr.push(expr.slice(i, i + 10));
	}

	for (let j = 0; j < firsfArr.length; j++) {
		for (let m = 0; m < firsfArr[j].length; m++) {
			if (firsfArr[j][m] == '*') {
				secondArr.push('33');
				break;
			}
			else if (firsfArr[j][m] == '1') {
				secondArr.push(firsfArr[j].slice(firsfArr[j].indexOf(firsfArr[j][m])));
				break;
			}

		}
	}


	for (let n = 0; n < secondArr.length; n++) {
		let param = '';
		for (let k = 0; k < secondArr[n].length; k += 2) {

			if (secondArr[n].slice(k, k + 2) == '10') {
				param += '.';
			} else if (secondArr[n].slice(k, k + 2) == '11') {
				param += '-';
			} else if (secondArr[n].slice(k, k + 2) == '33') {
				thirdArr.push('5');
			}

		}
		thirdArr.push(param);

	}


	for (let i = 0; i < thirdArr.length; i++) {
		for (let element in MORSE_TABLE) {
			if (thirdArr[i] == element) {
				final.push(MORSE_TABLE[thirdArr[i]])
			}
		}

	}




	return final.join('');

}

module.exports = {
	decode
}