$(document).ready(function(){
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
    })
})