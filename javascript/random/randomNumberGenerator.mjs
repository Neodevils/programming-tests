/**
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random number between the min and max values.
 * @description Returns a random number between min (inclusive) and max (exclusive)
 * @example randomNumberGenerator(1, 10) // returns a random number between 1 and 10
 */

export var randomNumberGenerator = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* 
  import { randomNumberGenerator } from "...";
  
  let rndm = randomNumberGenerator( 1, 10);
  
  console.log(rndm)
*/
