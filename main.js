var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        var header_text = getElementsByClass('header_text');
        var location= apiResult.name;
       
        function welcome_to () {
        header_text.innerHTML = location;
        }

        var text = getElementsByClass('text');
        var weather = apiResult.weather.description;
       
        function local_weather () {
        text.innerHTML = weather;
        }
        //Code Dealing With The API Data Goes Here

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33904,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();