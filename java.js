document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Espera 3 segundos antes de ocultar el preloader
    setTimeout(function() {
        // Ocultar el preloader
        preloader.style.display = 'none';

        // Mostrar el contenido de la página
        content.style.display = 'block';
    }, 5000); // 4000 milisegundos = 4 segundos
});


document.getElementById('alertText').style.color = '#ff0000';


let lastScrollTop = 0;
const translatorContainer = document.getElementById('translator_container');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Usuario bajando el cursor
        translatorContainer.classList.add('hidden');
    } else {
        // Usuario subiendo el cursor
        translatorContainer.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});

document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('alert').style.display = 'none'; // Ocultar alerta al hacer clic en el botón
});

