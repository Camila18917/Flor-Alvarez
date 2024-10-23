/* NAVAR */
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
            presentacion.style.display = 'none';
            contentContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}

document.getElementById('pagina1').addEventListener('click', function() {
    loadPage('page1.html');
});

document.getElementById('pagina2').addEventListener('click', function() {
    loadPage('page2.html');
});

document.getElementById('pagina3').addEventListener('click', function() {
    loadPage('page3.html');
});


document.getElementById('home').addEventListener('click', function() {
    const contentContainer = document.getElementById('contentContainer');
    const presentacion = document.getElementById('presentacion');

    contentContainer.style.display = 'none';
    presentacion.style.display = 'flex';
    
});






/* FOOTER */
class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<footer>
          <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        </footer>`;
    }
  }
  customElements.define('footer-component', FooterComponent);
  




/* CANCIONES */
function canciones(archivo) {
    fetch(archivo)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('canciones').innerHTML = html;
            presentacion.style.display = 'none';
            document.getElementById("canciones").style.display = 'block';
            console.log("ACA");
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}

document.getElementById('album1').addEventListener('click', function() {
    loadPage('album1.html');
});

document.getElementById('album2').addEventListener('click', function() {
    loadPage('album2.html');
});

    
document.getElementById('home').addEventListener('click', function() {
    const contentContainer = document.getElementById('canciones');
    const presentacion = document.getElementById('presentacion');

    canciones.style.display = 'none';
    presentacion.style.display = 'flex';
    
});

