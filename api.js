
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
        const apiCall = `${proxyUrl}https://api.darksky.net/forecast/5e107229917ba31c674da6176e27b702/59.43696,24.75353?units=si`;
        //        const apiCall = `${proxyUrl}https://api.darksky.net/forecast/5e107229917ba31c674da6176e27b702/37.8267,-122.4233`;

     
        $.getJSON(apiCall,function(data){
            console.log(data);
            updateDOM(data);
        });
    }


    function updateDOM(data){
        var city = data.timezone;
        var temp = Math.round(data.currently.temperature)+"°C";
        var humi = data.currently.summary;
        var desc = data.currently.description;
        var rain = data.currently.precipType;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#humi').html(humi);
        $('#desc').html(desc);
        $('#rain').html(rain); 
    }

});

