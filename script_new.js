
$(document).ready(function(){

    // Call collect input value from form and call API for number of objects
    // Then display Image, name and id
    $('#poke-form').submit(function(e){
        e.preventDefault()
        let x = $('#pokemon-count').val()
        console.log(x);
        let t = ""; 
        for(let s = 1; s<=x; s++){
            $.get(`https://pokeapi.co/api/v2/pokemon/${s}`, function( data ) {
                console.log(data);
                t += `<div class="col border items">
                        <img class="poke-image" src=${data.sprites.front_default}></img>
                        <p class="name">${data.name}</p>
                        <p class="id">${data.id}</p>
                    </div>`
                $('.poke').html(t); 
            });
        };
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


    // Would like to change image from front to back when click
    // $(document).on('click', function(){
    //     var op = $('.id').val();
    //     console.log(op);
    // });


});


