var cookies = parseInt(document.getElementById('nOC').value);
var cursors = 0;
var grandmothers = 0;
var upg3 = 0;
var ImpossibleThing = 0;
var cPC = 1;
var cPS = 0;
var savegame = {
    cookies: cookies,
    cursors: cursors,
    grandmothers: grandmothers,
    ImpossibleThing: ImpossibleThing
};
var savegame = JSON.parse(localStorage.getItem("save"));
function saveButton(){}
function deleteSave(){
	cPC = 1;
	cPS = 0;
	cookies = 0;
	cursors = 0;
	grandmothers = 0;
	ImpossibleThing = 0;
	console.log("Save Sucsessfully deleted.")
}
function light(){
	document.getElementsByTagName("body")[0].style.background = "#FFFFFF";
	document.getElementsByTagName("h1")[0].style.color = "#000000";
	document.getElementsByTagName("button")[0].style.color = "#000000";
}
function dark(){
	document.getElementsByTagName("body")[0].style.background = "#000000";
	document.getElementsByTagName("h1")[0].style.color = "#FFFEEF";
}
function incrementValue(number) {
	cookies += number;
	return document.getElementById('nOC').value = cookies;
}
/* upgrade method */
function buyUpg1(){
	document.getElementById('bC').innerHTML = "Buy a cursor for " + upgradeCost + " cookies";
	var upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));
	if (cookies >= upgradeCost) {
		cursors += 1;
		cookies -= upgradeCost;
		document.getElementById('aOC').innerHTML = cursors;
		document.getElementById('nOC').value = cookies;
		upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));
		cPS += 0.5;
	}else if(upgradeCost >= cookies){
		alert("You do not have enough cookies to buy this upgrade");
	}
	console.log("upgradeCost:", upgradeCost)
	document.getElementById('bC').innerHTML = "Buy a cursor for " + upgradeCost + " cookies";
}
function buyUpg2(){
	var upgradeCost = Math.floor(50 * Math.pow(1.1, grandmothers));
	document.getElementById('bOG').innerHTML = "Buy a grandmother for " + upgradeCost + " cookies";
	if (cookies >= upgradeCost) {
		grandmothers += 1;
		cookies -= upgradeCost;
		document.getElementById('aOG').innerHTML = cursors;
		document.getElementById('nOC').value = cookies;
		upgradeCost = Math.floor(50 * Math.pow(1.1, grandmothers));
		cPC += 0.5;
	}else if(upgradeCost >= cookies){
		alert("You do not have enough cookies to buy this upgrade");
	}
	console.log("upgradeCost:", upgradeCost);
}
function buyUpg3(){
	var upgradeCost = Math.floor(75 * Math.pow(1.1, grandmothers));
	if (cookies >= upgradeCost) {
		upg3 += 1;
		cookies -= upgradeCost;
		document.getElementById('aOG').innerHTML = cursors;
		document.getElementById('nOC').value = cookies;
		upgradeCost = Math.floor(50 * Math.pow(1.1, grandmothers));
		cPS += 5;
	}else if(upgradeCost >= cookies){
		alert("You do not have enough cookies to buy this upgrade");
	}
	console.log("upgradeCost:", upgradeCost);	
}
/* cPS  Method */
setInterval(function(){
	cookies += cPS;
	document.getElementById('nOC').value = cookies;
},1000);
/* Easter Egg Maker */
function easterEgg(number){
	alert("You have found easter egg number " + number + "!");
	alert("A 50% boost has been added to your clicks!");
	cPC = cPC * 1.5;
};
/*_convert to millions, billions , etc._*/
var digits = new Number(cookies).toString().length;
if (digits >= 7) {cookies = cookies / 1000000 + "millions"} else {}

/* Easter Egg for god mode*/
function godMode() {
	cookies = 999999999999999999999999999999;
}
if (navigator.onLine = false) {alert("Hi, Open-Cookie is not working, or you are offline and this is a remote copy... Anyways, your save data will NOT be saved.");}
