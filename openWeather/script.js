$(document).ready(function(){
    let history = {};
    let count = 0;
    $(`#city-form`).submit(function(){
        // e.preventDefault()
        let city_input = $(`#city`).val();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_input}&appid=${config.myKey}`
        $.get(url, function(data){
            let kelvin = data.main.temp;
            console.log(kelvin);
            let faren = Math.floor(((kelvin-273.15)*1.8)+32);
            $('.temp-value').text(faren+`F`);
            $('.city-value').text(`${data.name}`);
            $('.wind-value').text(`${data.wind.speed}`+"m/s");
            
            history[`${data.name}`]= faren+'F';

            $('.city-history0').text(Object.keys(history)[Object.keys(history).length - 1]);
            $('.temp-history0').text(Object.values(history)[Object.values(history).length - 1]);
            $('.city-history1').text(Object.keys(history)[Object.keys(history).length - 2]);
            $('.temp-history1').text(Object.values(history)[Object.values(history).length - 2]);
            $('.city-history2').text(Object.keys(history)[Object.keys(history).length - 3]);
            $('.temp-history2').text(Object.values(history)[Object.values(history).length - 3]);
            $('.city-history3').text(Object.keys(history)[Object.keys(history).length - 4]);
            $('.temp-history3').text(Object.values(history)[Object.values(history).length - 4]);
            $('.city-history4').text(Object.keys(history)[Object.keys(history).length - 5]);
            $('.temp-history4').text(Object.values(history)[Object.values(history).length - 5]);
        }, `json`);
        

        let other_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_input}&appid=${config.myKey}`
        $.get(other_url, function(other_data){
            let twoK = other_data.list[0].main.temp;
            let fiveK = other_data.list[1].main.temp;
            let eightK = other_data.list[2].main.temp;
            let twoHour = Math.floor(((twoK-273.15)*1.8)+32);
            let fiveHour = Math.floor(((fiveK-273.15)*1.8)+32);
            let eightHour = Math.floor(((eightK-273.15)*1.8)+32);
            $('.two-hour').text(twoHour+`F`);
            $('.five-hour').text(fiveHour+`F`);
            $('.eight-hour').text(eightHour+`F`);
        }, `json`);
        return false;
    });
})