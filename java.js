





// Mostrar el preloader mientras carga la página
document.body.classList.add('loading');

// Detectar cuando la página ha cargado
window.addEventListener('load', function () {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});


window.onload = function () {
    changeButtonText();
};
