# 🎨 EJEMPLOS DE PERSONALIZACIÓN AVANZADA

## 1. Cambiar Nombre del Colegio Diferente en Cada Diapositiva

### Opción A: Personalización Simple
Si quieres el mismo nombre en todas las diapositivas, edita `app.js` (hay 2 ubicaciones):

**Ubicación 1 - Diapositiva de Contenido (línea ~140):**
```javascript
<h3>Instituto Técnico Pablo Neruda</h3>
```

**Ubicación 2 - Diapositiva de Título (línea ~155):**
```javascript
<h3>Instituto Técnico Pablo Neruda</h3>
```

### Opción B: Nombres Diferentes por Diapositiva
Modifica `slides-data.js` para agregar una propiedad `schoolName`:

```javascript
{
    id: 1,
    type: "title",
    title: "Fundamentos de Matemáticas",
    subtitle: "Conceptos Esenciales y Aplicaciones",
    author: "Presentación Educativa",
    description: "Una exploración completa de los principios fundamental de la matemática",
    course: "10° Grado",
    schoolName: "Instituto A"  // ← AGREGAR ESTO
}
```

Luego, modifica `app.js` en la función `renderSlide()`:

```javascript
// En lugar de:
<h3>Nombre del Colegio</h3>

// Usa:
<h3>${slide.schoolName || 'Nombre del Colegio'}</h3>
```

---

## 2. Cambiar Curso Diferente por Diapositiva

Ya está implementado. Solo edita en `slides-data.js`:

```javascript
{
    id: 2,
    type: "content",
    title: "Álgebra Básica",
    subtitle: "Ecuaciones Lineales",
    course: "10° A - Matemáticas",  // ← CAMBIA AQUÍ
    content: `...`
}
```

### Ejemplos de Cursos:
```javascript
course: "10° Grado"
course: "10° A - Matemática"
course: "4to Año - Sección B"
course: "Segundo Ciclo"
course: "Bachillerato en Ciencias"
```

---

## 3. Agregar Logo Personalizados por Sección

Modifica `slides-data.js` para agregar propiedad `logo`:

```javascript
{
    id: 1,
    type: "title",
    title: "Fundamentos de Matemáticas",
    subtitle: "Conceptos Esenciales y Aplicaciones",
    author: "Presentación Educativa",
    description: "Una exploración completa de los principios fundamentales de la matemática",
    course: "10° Grado",
    logo: "logo-oficial.png"  // ← AGREGAR ESTO
}
```

Luego modifica `app.js` en `renderSlide()`:

```javascript
// En lugar de:
<img src="logo.png" alt="Logo del colegio" 

// Usa:
<img src="${slide.logo || 'logo.png'}" alt="Logo del colegio"
```

---

## 4. Personalizar Colores por Tema de Diapositiva

En `styles.css`, agrega clases específicas:

```css
/* Diapositiva roja */
.slide.theme-red {
    --primary-color: #dc2626;
    --primary-dark: #991b1b;
    --primary-light: #fee2e2;
}

/* Diapositiva verde */
.slide.theme-green {
    --primary-color: #059669;
    --primary-dark: #065f46;
    --primary-light: #d1fae5;
}

/* Diapositiva azul */
.slide.theme-blue {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --primary-light: #dbeafe;
}
```

En `slides-data.js`, agrega propiedad `theme`:

```javascript
{
    id: 2,
    type: "content",
    title: "Álgebra Básica",
    subtitle: "Ecuaciones Lineales",
    course: "10° Grado",
    theme: "red",  // ← AGREGAR ESTO
    content: `...`
}
```

En `app.js`, modifica `renderSlide()`:

```javascript
// Busca donde dice: <div class="slide active">
// Y reemplaza con:
<div class="slide active ${slide.theme ? 'theme-' + slide.theme : ''}">
```

---

## 5. Agregar Autor o Profesor en la Diapositiva

En `slides-data.js`, agregar propiedad `teacher`:

```javascript
{
    id: 1,
    type: "title",
    title: "Fundamentos de Matemáticas",
    subtitle: "Conceptos Esenciales y Aplicaciones",
    author: "Presentación Educativa",
    description: "Una exploración completa de los principios fundamentales de la matemática",
    course: "10° Grado",
    teacher: "Prof. María García"  // ← AGREGAR ESTO
}
```

En `app.js`, agrega en `renderSlide()` dentro de `slide-header`:

```javascript
<div class="slide-header-right">
    <p>${slide.course || 'Curso'}</p>
    ${slide.teacher ? '<p class="teacher">' + slide.teacher + '</p>' : ''}
</div>
```

En `styles.css`, agrega estilo:

```css
.teacher {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    font-style: italic;
    margin-top: 4px;
}
```

---

## 6. Cambiar Tema Automáticamente según la Hora

En `app.js`, modifica el método `init()`:

```javascript
init() {
    // Aplicar tema basado en la hora
    const hour = new Date().getHours();
    const autoTheme = (hour >= 20 || hour < 6) ? 'dark' : 'light';
    this.setTheme(autoTheme);
    
    // ... resto del código
}
```

---

## 7. Agregar Número de Página en el Header

En `app.js`, modifica `renderSlide()`:

```javascript
<div class="slide-header-right">
    <p>${slide.course || 'Curso'}</p>
    <p class="page-number">Página ${this.currentSlideIndex + 1}/${this.totalSlides}</p>
</div>
```

En `styles.css`, agrega:

```css
.page-number {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    margin-top: 4px;
}
```

---

## 8. Agregar Fecha en el Footer

En `index.html`, modifica el footer:

```html
<footer class="footer">
    <div class="footer-content">
        <!-- Botones existentes -->
        
        <div class="footer-info">
            <span id="currentDate"></span>
        </div>
    </div>
</footer>
```

En `app.js`, agrega en el método `init()`:

```javascript
// Mostrar fecha
const today = new Date();
const dateString = today.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
document.getElementById('currentDate').textContent = dateString;
```

En `styles.css`, agrega:

```css
.footer-info {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    text-align: center;
}
```

---

## 9. Cambiar Animación de Diapositivas

En `styles.css`, modifica las keyframes:

```css
/* Cambiar a efecto de fade (aparición gradual) */
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: scale(0.95);  /* ← Cambiar de translateX */
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* O usar zoom in */
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
```

---

## 10. Agregar Marca de Agua (Watermark)

En `styles.css`, agrega:

```css
.slide::before {
    content: 'CONFIDENCIAL';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-size: 80px;
    font-weight: bold;
    color: rgba(128, 128, 128, 0.1);
    pointer-events: none;
    z-index: 1;
}
```

---

## Cheat Sheet - Cambios Rápidos

### Cambiar nombre del colegio:
```javascript
// En app.js, línea ~140 y ~155
<h3>TU NOMBRE AQUI</h3>
```

### Cambiar todos los cursos:
```javascript
// En slides-data.js, busca "course:" y reemplaza
course: "TU CURSO AQUI"
```

### Cambiar colores primarios:
```css
/* En styles.css, línea ~10 */
--primary-color: #NUEVO_COLOR;
```

### Cambiar logo:
```javascript
// Renombra tu logo a: logo.png
// Coloca en la misma carpeta que index.html
```

---

## Troubleshooting

### Los cambios no aparecen
1. Limpia el caché: Ctrl+Shift+Delete
2. Recarga: Ctrl+R o F5
3. Verifica la sintaxis (especialmente comillas y paréntesis)

### El logo está distorsionado
1. Usa un logo cuadrado (500x500px mínimo)
2. El CSS lo redimensionará a 50x50px automáticamente

### El curso se corta en móvil
1. Acorta el nombre del curso
2. O usa CSS: `overflow: hidden; text-overflow: ellipsis;`

### Quiero revertir cambios
1. Ten una copia de respaldo
2. O descarga los archivos originales nuevamente

---

**¡Experimenta y personaliza según tus necesidades!**
