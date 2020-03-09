/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function sum(m) {
	let currentSum = m;
	function f(n){
		currentSum += n;
		return f;
	}
	f.toString = function(){
		return currentSum;
	};
	return f;
}
alert(sum (1)(1));
alert(sum (2)(5));
