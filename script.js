const carousel = document.querySelector('.carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;
let index = 0;

function showNextImage() {
    index = (index + 1) % totalItems;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Cambia la imagen cada 4 segundos
setInterval(showNextImage, 4000);

document.querySelector('.hidden-text-container').addEventListener('click', function() {
    const text = this.querySelector('.hidden-text');
    text.style.opacity = text.style.opacity == 1 ? 0 : 1;
});


