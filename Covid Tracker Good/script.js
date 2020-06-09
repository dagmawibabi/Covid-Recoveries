//var regV = document.getElementsByClassName("regions");
var recV = document.getElementsByClassName("recovered");

fetch('https://corona.lmao.ninja/v2/countries/Ethiopia')
.then((response) => {
	return response.json();
})
.then((data) => {
	recV[0].innerHTML = data.recovered.toLocaleString();
})

var totalRecovered = 0;
fetch('https://corona.lmao.ninja/v2/countries')
.then((response) => {
	return response.json();
})
.then((data) => {
	for(var i = 0; i < data.length; i++) {
		totalRecovered += data[i].recovered;
	}
	recV[1].innerHTML = totalRecovered;
})

