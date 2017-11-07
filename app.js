var value = parseInt(document.getElementById('numberOfCookies').value, 10);
var changeText = document.setInterval(incrementPerSecond,1);
function incrementValue(){
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('numberOfCookies').value = value;
	}
function incrementPerSecond() {
	return incrementValue();
}