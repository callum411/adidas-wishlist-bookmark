javascript:(function(){
var getSKU = prompt('Enter the SKU.');
var cookies = getCookie();
function getCookie() {
    var name = "wishlist=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (getSKU === "") {

} else {
	if (cookies === "") {
		cookies = [];
		cookies.push(getSKU);
		document.cookie = 'wishlist=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		document.cookie="wishlist=" + encodeURIComponent(JSON.stringify(cookies)) + ";path=/"; location.reload();
	} else {
		var JSONData = JSON.parse(cookies.split(","));
		JSONData.push(getSKU);
		document.cookie="wishlist=" + encodeURIComponent(JSON.stringify(JSONData)) + ";path=/"; location.reload();
	}
}
})();
