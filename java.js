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



