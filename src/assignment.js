// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  let sumElements = 0; //initialize var to hold sum

  for(let arrCount = 0; arrCount < arrayOfNumbers.length; arrCount++){
    sumElements += arrayOfNumbers[arrCount]; //increment sum
  }
    return sumElements;
}
assignment.sumOfNumbers = sumOfNumbers;
/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
  let evenNumCount = 0;
  for(let arrCounter = 0; arrCounter < arrayOfNumbers.length; arrCounter++){
    if ((arrayOfNumbers[arrCounter] % 2) == 0)
    {
      evenNumCount += 1;
    }
  }
  return evenNumCount;
}
assignment.countEvenNumbers = countEvenNumbers;
/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(tempsCelcius) {
    //declare new array to hold Fahrenheit temps
    let tempsFahrenheit = new Array;

    //convert each temp to fahrenheit, truncate it, and push into the new
    //fahrenheit array
    tempsCelcius.forEach(tempCelcius => {
        let tempFahrenheit = ((tempCelcius * (9/5)) + 32);
        tempsFahrenheit.push(Math.trunc(tempFahrenheit));
    });
    return tempsFahrenheit;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

