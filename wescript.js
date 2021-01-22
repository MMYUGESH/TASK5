var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    let latlong = data.map((element) => {
        if (element === undefined) {
            pass;
        }
        return element.latlng
    });
    //console.log(latlong);
    latlong.forEach((element) => {
        var request1 = new XMLHttpRequest();
        request1.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${element[0]}&lon=${element[1]}&appid=833a26ac4901bcc9133b0add8f5226e2`, true)
        request1.send();
        request1.onload = function () {
            var wedata = JSON.parse(this.response);

            console.log(wedata.sys, wedata.main);







        }
    });
}



