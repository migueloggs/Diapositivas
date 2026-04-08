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
        this.currentTheme = this.getSystemTheme();
        
        // Referencias a elementos del DOM
        this.slideWrapper = document.getElementById('slideWrapper');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.themeBtn = document.getElementById('themeBtn');
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        this.progressBar = document.getElementById('progressBar');
        this.currentSlideSpan = document.getElementById('currentSlide');
        this.totalSlidesSpan = document.getElementById('totalSlides');
        
        // Inicialización
        this.init();
    }

    /**
     * Obtiene el tema actual del sistema
     */
    getSystemTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    /**
     * Establece el tema de la aplicación
     */
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    /**
     * Alterna entre tema claro y oscuro
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    /**
     * Actualiza el icono del botón de tema
     */
    updateThemeIcon() {
        const icon = document.getElementById('themeIcon');
        if (this.currentTheme === 'dark') {
            // Sol (para modo oscuro - cambiar a claro)
            icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
        } else {
            // Luna (para modo claro - cambiar a oscuro)
            icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
        }
    }

    /**
     * Inicializa la aplicación
     */
    init() {
        // Aplicar tema guardado
        this.setTheme(this.currentTheme);
        
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
        
        // Botón de tema
        this.themeBtn.addEventListener('click', () => this.toggleTheme());
        
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
                    <div class="slide-header">
                        <div class="slide-header-left">
                            <div class="slide-logo">
                                <img src="logo.png" alt="Logo del colegio" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%231e40af%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2260%22 font-size=%2250%22 font-weight=%22bold%22 text-anchor=%22middle%22 fill=%22white%22%3ES%3C/text%3E%3C/svg%3E'">
                            </div>
                            <div class="slide-school-info">
                                <h3>Nombre del Colegio</h3>
                            </div>
                        </div>
                        <div class="slide-header-right">
                            <p>${slide.course || 'Curso'}</p>
                        </div>
                    </div>
                    <div class="slide-body">
                        <div>
                            <h1 class="slide-title">${slide.title}</h1>
                            <p class="slide-subtitle">${slide.subtitle}</p>
                        </div>
                        <div>
                            <p class="slide-content">${slide.author}</p>
                            <p class="slide-content">${slide.description}</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Diapositiva de contenido
            slideHTML = `
                <div class="slide active">
                    <div class="slide-header">
                        <div class="slide-header-left">
                            <div class="slide-logo">
                                <img src="logo.png" alt="Logo del colegio" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%232563eb%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2260%22 font-size=%2250%22 font-weight=%22bold%22 text-anchor=%22middle%22 fill=%22white%22%3ES%3C/text%3E%3C/svg%3E'">
                            </div>
                            <div class="slide-school-info">
                                <h3>Nombre del Colegio</h3>
                            </div>
                        </div>
                        <div class="slide-header-right">
                            <p>${slide.course || 'Curso'}</p>
                        </div>
                    </div>
                    <div class="slide-body">
                        <h2 class="slide-title">${slide.title}</h2>
                        <p class="slide-subtitle">${slide.subtitle}</p>
                        <div class="slide-content">
                            ${slide.content}
                        </div>
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
