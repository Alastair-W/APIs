$(document).ready(function(){
    $(`#city-form`).submit(function(e){
        e.preventDefault()
        let city_input = $(`#city`).val();
        let url = `api.openweathermap.org/data/2.5/weather?q=${city_input}&appid=${config.myKey}`
        $.get(url, function(data){
            $('.output').text(`${data.main.temp}`);
        }, `json`);
        return false;
    })
})