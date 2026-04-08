/**
 * APLICACIÓN DE PRESENTACIÓN DE DIAPOSITIVAS
 * Maneja la lógica, navegación y sincronización de elementos
 */

class PresentationApp {
    constructor() {
        this.currentSlideIndex = 0;
        this.totalSlides = slides.length;
        this.isAnimating = false;
        this.isFullscreen = false;
        
        // Referencias a elementos del DOM
        this.slideWrapper = document.getElementById('slideWrapper');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        this.progressBar = document.getElementById('progressBar');
        this.currentSlideSpan = document.getElementById('currentSlide');
        this.totalSlidesSpan = document.getElementById('totalSlides');
        
        // Inicialización
        this.init();
    }

    /**
     * Inicializa la aplicación
     */
    init() {
        this.renderSlide(0);
        this.setupEventListeners();
        this.updateUI();
        
        // MathJax se renderiza automáticamente con un pequeño delay
        setTimeout(() => {
            if (window.MathJax) {
                MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
            }
        }, 100);
    }

    /**
     * Configura los listeners de eventos
     */
    setupEventListeners() {
        // Botones de navegación
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Botón de pantalla completa
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        
        // Navegación por teclado
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
        
        // Detección de salida de pantalla completa
        document.addEventListener('fullscreenchange', () => this.handleFullscreenChange());
    }

    /**
     * Maneja la navegación por teclado
     * Flecha izquierda: diapositiva anterior
     * Flecha derecha: siguiente diapositiva
     * Espacio: siguiente diapositiva
     * F: pantalla completa
     */
    handleKeyboardNavigation(event) {
        if (this.isAnimating) return;
        
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                this.previousSlide();
                break;
            case 'ArrowRight':
            case ' ':
                event.preventDefault();
                this.nextSlide();
                break;
            case 'f':
            case 'F':
                if (!event.ctrlKey && !event.metaKey) {
                    event.preventDefault();
                    this.toggleFullscreen();
                }
                break;
        }
    }

    /**
     * Renderiza una diapositiva específica
     * @param {number} index - Índice de la diapositiva a renderizar
     */
    renderSlide(index) {
        const slide = slides[index];
        let slideHTML = '';

        if (slide.type === 'title') {
            // Diapositiva de título
            slideHTML = `
                <div class="slide title-slide active">
                    <div>
                        <h1 class="slide-title">${slide.title}</h1>
                        <p class="slide-subtitle">${slide.subtitle}</p>
                    </div>
                    <div>
                        <p class="slide-content">${slide.author}</p>
                        <p class="slide-content">${slide.description}</p>
                    </div>
                </div>
            `;
        } else {
            // Diapositiva de contenido
            slideHTML = `
                <div class="slide active">
                    <h2 class="slide-title">${slide.title}</h2>
                    <p class="slide-subtitle">${slide.subtitle}</p>
                    <div class="slide-content">
                        ${slide.content}
                    </div>
                </div>
            `;
        }

        this.slideWrapper.innerHTML = slideHTML;
        
        // Renderizar MathJax después de insertar el contenido
        setTimeout(() => {
            if (window.MathJax) {
                MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
            }
        }, 50);
    }

    /**
     * Navega a la siguiente diapositiva
     */
    nextSlide() {
        if (this.isAnimating || this.currentSlideIndex >= this.totalSlides - 1) {
            return;
        }
        
        this.isAnimating = true;
        this.currentSlideIndex++;
        this.renderSlide(this.currentSlideIndex);
        this.updateUI();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 400);
    }

    /**
     * Navega a la diapositiva anterior
     */
    previousSlide() {
        if (this.isAnimating || this.currentSlideIndex <= 0) {
            return;
        }
        
        this.isAnimating = true;
        this.currentSlideIndex--;
        this.renderSlide(this.currentSlideIndex);
        this.updateUI();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 400);
    }

    /**
     * Actualiza los elementos de la interfaz
     */
    updateUI() {
        // Actualizar número de diapositiva
        this.currentSlideSpan.textContent = this.currentSlideIndex + 1;
        
        // Actualizar barra de progreso
        const progress = ((this.currentSlideIndex + 1) / this.totalSlides) * 100;
        this.progressBar.style.width = progress + '%';
        
        // Actualizar estado de botones de navegación
        this.prevBtn.disabled = this.currentSlideIndex === 0;
        this.nextBtn.disabled = this.currentSlideIndex === this.totalSlides - 1;
        
        // Aplicar estilos a botones deshabilitados
        if (this.currentSlideIndex === 0) {
            this.prevBtn.style.opacity = '0.5';
            this.prevBtn.style.cursor = 'not-allowed';
        } else {
            this.prevBtn.style.opacity = '1';
            this.prevBtn.style.cursor = 'pointer';
        }
        
        if (this.currentSlideIndex === this.totalSlides - 1) {
            this.nextBtn.style.opacity = '0.5';
            this.nextBtn.style.cursor = 'not-allowed';
        } else {
            this.nextBtn.style.opacity = '1';
            this.nextBtn.style.cursor = 'pointer';
        }
    }

    /**
     * Alterna el modo pantalla completa
     */
    toggleFullscreen() {
        const container = document.querySelector('.presentation-container');
        
        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(err => {
                console.error(`Error al entrar en pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    /**
     * Maneja cambios en el estado de pantalla completa
     */
    handleFullscreenChange() {
        this.isFullscreen = !!document.fullscreenElement;
        
        // Aquí puedes agregar lógica adicional si es necesario
        if (this.isFullscreen) {
            // Elemento entró en pantalla completa
        } else {
            // Elemento salió de pantalla completa
        }
    }
}

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    new PresentationApp();
});
