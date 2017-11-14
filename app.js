var value = parseInt(document.getElementById('numberOfCookies').value);
var cursors = 0;
var grandmothers = 0;
var ImpossibleThing = 0;
var cookiesPerClick = 0;

function incrementValue(number) {
	value += number;
	return document.getElementById('numberOfCookies').value = value;
}
function buyUpg1(){
	document.getElementById('buyCursor').innerHTML = "Buy a cursor for " + upgradeCost + " cookies";
	var upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));
	if (value >= upgradeCost) {
		cursors += 1;
		value -= upgradeCost;
		document.getElementById('amountOfCursors').innerHTML = cursors;
		document.getElementById('numberOfCookies').value = value;
		upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));
	}else if(upgradeCost >= value){
		alert("You do not have enough cookies to buy this upgrade");
	}
	console.log("upgradeCost:", upgradeCost)
	document.getElementById('buyCursor').innerHTML = "Buy a cursor for " + upgradeCost + " cookies"
	console.log(cursors);
	console.log(value);
}
