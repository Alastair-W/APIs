
$(document).ready(function(){

    
    $('button').click(function(e){
        e.preventDefault()
        let x = $('input[id=pokemon-count]').val()
        console.log(x);
        let t = ""; 
        for(let s = 1; s<=x; s++){
            pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+s+".png"
            t += `<div class="col bg-light border"><img src=${pokeUrl}></div>`
        }
        $('.poke').html(t);    
    })
})


