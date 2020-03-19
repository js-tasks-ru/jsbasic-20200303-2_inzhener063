/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
const inputData = "1, -5.8 или 10, хотя 34 + -5.3 и 73";

function getMinMax(string) {
	var num_arr = string.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
  
  return {
  	min : Math.min.apply(null, num_arr),
    max : Math.max.apply(null, num_arr)
  };
}
