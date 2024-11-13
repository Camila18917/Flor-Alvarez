

function buscarLetra(event) {
    event.preventDefault();
    const nombreCancion = document.getElementById('cancionb').value;
    fetch(`https://api.lyrics.ovh/v1/Flor Alvarez/${nombreCancion}`)
      .then(response => response.json())
      .then(data => {
        if(data.cod == 404){
          document.getElementById('clima').innerHTML = `<h2>No se encontró cancion</h2>`;
          return;
        }
        document.getElementById('clima').innerHTML = data.lyrics;
  })}