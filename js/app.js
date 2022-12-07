function addTwoNum(firstNum, lastNum) {
    var addResult = firstNum + lastNum;
    // document.write(addResult);
    console.log(addResult);
}

addTwoNum(50,25);
// document.write(" | ");
addTwoNum(35,95);



/* operators */

var x = 10;

var r1 = x > 9;

console.log('x > 9 ' +  r1); // true

var r2 = x > 12;

console.log('x > 12 ' + r2); // false

var r3 = x <= 10; // x < 10 or x = 10 // false or true // true

console.log('x <= 10 ' + r3) // true

var r4 = x <= 9; // x < 9 or x = 9 // false or false // false

console.log('x <= 9 ' +r4 ) // false

// Falsy Values - 0, false, empty array, empty string (length is 0), undefined, null
// Truthy Values - 1 or any positive number, true, any array (length min 1), string (length min 1)

console.log('undefined == null', undefined == null);

console.log('undefined === null' ,undefined === null);

console.log('0 == false ' + (0 == false));

console.log('0 === false', 0 === false);

