
$(document).ready(function() {

    //get location!!!!
    navigator.geolocation.getCurrentPosition(success,error);

    function success(pos){
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat,long);
    }

    function error(){
        console.log('error');
    }
    
    function weather(lat,long){

        const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
        const apiCall = `${proxyUrl}http://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=aadf820a8e4be082f0d26c9807c300cc&units=metric`;

        //var apiCall =`http://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=aadf820a8e4be082f0d26c9807c300cc&units=metric`;
     
        $.getJSON(apiCall,function(data){
            console.log(data);
            updateDOM(data);
        });
    }


    function updateDOM(data){
        var city = data.name;
        var temp = Math.round(data.main.temp);
        var humi = data.main.humidity;
        var desc = data.weather[0].description;
        //var icon = data.weather[0].icon;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#humi').html(humi);

        $('#desc').html(desc);
        //$('#icon').attr('src', icon); 
    }

});

