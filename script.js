
$(document).ready(function(){

    
    $('#poke-form').submit(function(e){
        e.preventDefault()
        let x = $('#pokemon-count').val()
        console.log(x);
        let t = ""; 

        // $.get(`https://pokeapi.co/api/v2/pokemon/${x}`, function( data ) {
        //     console.log(data);
        //     $('#results').html(`<p>${data.name}</p><img src=${data.sprites.front_default}></img>`)
        // });


        for(let s = 1; s<=x; s++){
            $.get(`https://pokeapi.co/api/v2/pokemon/${s}`, function( data ) {
                console.log(data);
                $('.poke').html(t);
            });
            pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+s+".png"
            t += `<div class="col bg-light border"><img src=${data.sprites.front_default}></img><h4>${data.name}</h4></div>`
        }
        $('.poke').html(t);    
    })
})


