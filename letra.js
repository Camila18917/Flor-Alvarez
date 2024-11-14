

function buscarLetra(event) {
    event.preventDefault();
    const nombreCancion = document.getElementById('cancionb').value;
    fetch(`https://api.lyrics.ovh/v1/Yami Safdie/${nombreCancion}`)
      .then(response => response.json())
      .then(data => {
        if(data.cod == 404){
          document.getElementById('clima').innerHTML = `<h2>No se encontró la ciudad</h2>`;
          return;
        }
        document.getElementById('clima').innerHTML = data.lyrics;
  })}