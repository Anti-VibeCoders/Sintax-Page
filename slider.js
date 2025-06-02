document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.proyectos');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Variables de control
    let currentIndex = 1; // Comenzamos con el slide del medio activo
    const totalSlides = slides.length;
    
    // Función para actualizar la visualización de los slides
    function updateSlides() {
        // Quitar la clase active de todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Añadir la clase active al slide actual
        slides[currentIndex].classList.add('active');
        
        // Reorganizar visualmente los slides
        positionSlides();
    }
    
    // Función para posicionar los slides visualmente
    function positionSlides() {
        const slideWidth = slides[0].offsetWidth;
        const gap = 20; // El mismo valor que tienes en tu CSS
        
        slides.forEach((slide, index) => {
            // Calculamos la posición relativa al slide activo
            const position = index - currentIndex;
            
            // Aplicamos transformaciones según la posición
            if (position === 0) {
                // Slide activo
                slide.style.transform = 'scale(1)';
                slide.style.opacity = '1';
                slide.style.zIndex = '5';
            } else {
                // Slides laterales
                slide.style.transform = 'scale(0.85)';
                slide.style.opacity = '0.7';
                slide.style.zIndex = '1';
            }
        });
    }
    
    // Función para ir al slide anterior
    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlides();
    }
    
    // Función para ir al siguiente slide
    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlides();
    }
    
    // Event listeners para los botones
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    
    // Inicializar el slider
    updateSlides();
    
    // Opcional: Permitir navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
    
    // Opcional: Permitir navegación con swipe en dispositivos táctiles
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        // Detectar dirección del swipe
        if (touchEndX < touchStartX - 50) {
            // Swipe izquierda
            goToNextSlide();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe derecha
            goToPrevSlide();
        }
    }
});