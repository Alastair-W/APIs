
$(document).ready(function(){

    // Call collect input value from form and call API for number of objects
    // Then display Image, name and id
    $('#poke-form').submit(function(e){
        e.preventDefault()
        let x = $('#pokemon-count').val()
        let t = ""; 
        for(let s = 1; s<=x; s++){
            $.get(`https://pokeapi.co/api/v2/pokemon/${s}`, function( data ) {
                console.log(data);
                let poke_id = data.id;
                console.log(poke_id);
                t += `<div class="col border items">
                        <img class="poke-image" src=${data.sprites.front_default}></img>
                        <p class="name">${data.name}</p>
                        <p class="id">${data.id}</p>
                    </div>`
                $('.poke').html(t);
            }, `json`);
        }
        
        $('div').on('click', '.items', function(e){
            e.stopPropagation();
            let p_id = $(this).find('.id').text();
            let pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${p_id}`
            $.get(pokeApiUrl, function(one_data){
                let types = [];
                for(let t = 0; t < one_data.types.length; t++){
                    types.push(one_data.types[t].type.name)
                    
                }
                let ability = [];
                for (let a = 0; a < one_data.abilities.length; a++){
                    ability.push(one_data.abilities[a].ability.name)
                }
                $(`.title`).replaceWith(`<h3 class="title">${one_data.name}</h3>`);
                $('.front').replaceWith(`<img class="front" src=${one_data.sprites.front_default}></img>`);
                $('.back').replaceWith(`<img class="back" src=${one_data.sprites.back_default}></img>`);
                $(`.poke-info`).replaceWith(`
                    <ul class="poke-info">
                        <li><b>Height:</b> ${one_data.height}</li>
                        <li><b>Weight:</b> ${one_data.weight}</li>
                        <li><b>Ability:</b> ${ability}</li>
                        <li><b>Types:</b> ${types}</li>
                    </ul>
                `)
                
                let species_URL = `https://pokeapi.co/api/v2/pokemon-species/${p_id}`
                $.get(species_URL, function(res){
                    let quote = res.flavor_text_entries[0].flavor_text;
                    $(`.quote`).replaceWith(`
                        <span class="quote">${quote}</span>
                    `);
                
                // console.log(deets);
                // $('.details').html(deets);
                
                }, `json`);
            });            
        });




        // Change bk color when hovering
        $(document).on({
            mouseenter: function(){
                $(this).css('background-color', '#e4eaed');
            },
            mouseleave: function(){
                $(this).css('background-color', 'whitesmoke');
            }
        }, ".items");




    });
});