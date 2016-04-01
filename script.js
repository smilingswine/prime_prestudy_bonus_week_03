function timesNine (a) {
	return a * 9;
}
function plusFour(a) {
	return a + 4;
}
function remainder(a) {
	return 978 % a;
}

var number = prompt("Please enter a number on the keypad. We will return a completely different number (probobly).");

var newNumber = remainder(plusFour(timesNine(number)));

alert("Based on " + number + ", we give you " + newNumber + "!");

console.log(newNumber);