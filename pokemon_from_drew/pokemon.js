$('#pokemon_num').submit(function(e){
    e.preventDefault()
    let num=$('#field').val()
    console.log(num)
    $.get(`https://pokeapi.co/api/v2/pokemon/${num}`, function( data ) {
        console.log(data);
        $('#results').html(`<p>${data.name}</p><img src=${data.sprites.front_default}></img>`)
      });
});