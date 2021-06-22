var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //console.log(apiResult);

        var header_text = document.getElementsByClassName('header_text');
        var location = apiResult.name;
       
        function welcome_to () {
        header_text[0].innerHTML = header_text[0].innerHTML + location ;
        
        console.log(header_text);
        }

        welcome_to ();

        var text = document.getElementsByClassName('text');
        var weather = apiResult.weather[0].description;
       
        function local_weather () {
        text[0].innerHTML = text[0].innerHTML + weather ;

        //console.log(weather);
        console.log(text);
        }

        local_weather ();
        //Code Dealing With The API Data Goes Here

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33904,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();