$('#pokemon_num').submit(function(e){
  e.preventDefault()
  let num=$('#field').val()
  console.log(num)
  let t = ""; 
  for(let y = 1; y <= num; y++){
    $.get(`https://pokeapi.co/api/v2/pokemon/${y}`, function( data ) {
      // console.log(data);
      t += `<p>${data.name}</p><img src=${data.sprites.front_default}></img>`
      $('#results').html(t);
    });
  };
  
});