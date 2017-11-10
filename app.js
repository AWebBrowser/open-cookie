var value = document.getElementById('numberOfCookies').value;
var upg1 = 0;
var upg2 = 0;
var upg3 = 0;
function incrementValue() {
	value++;
	return document.getElementById('numberOfCookies').value = value
}
function buyUpg1(){
	var upgradeCost = Math.floor(10 * Math.pow(1.1, cursors))
}