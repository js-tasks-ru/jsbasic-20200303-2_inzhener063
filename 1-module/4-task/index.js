/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

function checkSpam(str) {
	let lowerStr = str.toLowerCase();

	return lowerStr.includes('1xBet') || lowerStr.includes('XXX');
}

alert( checkSpam('1XbeT now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam('innocent rabbit') );
