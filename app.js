var cookies = parseInt(document.getElementById('nOC').value);
var cursors = 0;
var grandmothers = 0;
var ImpossibleThing = 0;
var cPC = 1;
var savegame = {
    cookies: cookies,
    cursors: cursors,
    grandmothers: grandmothers,
    ImpossibleThing: ImpossibleThing
};
/* Save Button */ function saveButton(){localStorage.setItem("save",JSON.stringify(savegame));};
/* Delete Save */ function deleteSave(){localStorage.removeItem("save");};

var savegame = JSON.parse(localStorage.getItem("save"));

function incrementValue(number) {
	cookies += number;
	return document.getElementById('nOC').value = cookies;
}
/* upgrade method */
function buyUpg1(){
	document.getElementById('buyCursor').innerHTML = "Buy a cursor for " + upgradeCost + " cookies";
	var upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));
	if (cookies >= upgradeCost) {
		cursors += 1;
		cookies -= upgradeCost;
		document.getElementById('aOC').innerHTML = cursors;
		document.getElementById('nOC').value = cookies;
		upgradeCost = Math.floor(10 * Math.pow(1.1, cursors));

	}else if(upgradeCost >= cookies){
		alert("You do not have enough cookies to buy this upgrade");
	}
	console.log("upgradeCost:", upgradeCost)
	document.getElementById('buyCursor').innerHTML = "Buy a cursor for " + upgradeCost + " cookies"
	console.log(cursors);
	console.log(cookies);
}

function fix(input){
    var output = Math.round(input * 123456789)/123456789;
    return output;
}
document.getElementById('nOC').innerHTML = fix(cookies);