# Presentación de Diapositivas - Documentación

## 📋 Descripción

Una aplicación web moderna y educativa para presentaciones de diapositivas con soporte para expresiones matemáticas. Construida con HTML, CSS y JavaScript vanilla, sin dependencias externas (excepto MathJax para las fórmulas).

## ✨ Características

- ✅ **10 diapositivas** de contenido matemático
- ✅ **Navegación fluida** con animaciones suaves
- ✅ **Barra de progreso** visual
- ✅ **Contador de diapositivas** (actual / total)
- ✅ **Pantalla completa** (F o botón)
- ✅ **Cambio de tema** (claro/oscuro) con botón y almacenamiento
- ✅ **Sección superior en cada diapositiva** con:
  - Logo del colegio (ajustable)
  - Nombre del colegio (personalizable)
  - Nombre del curso
- ✅ **Navegación por teclado**:
  - Flecha izquierda: diapositiva anterior
  - Flecha derecha o Espacio: siguiente diapositiva
  - F: activar/desactivar pantalla completa
- ✅ **Expresiones matemáticas** con MathJax
- ✅ **Modo oscuro/claro** con preferencia del sistema y manual
- ✅ **Diseño responsivo** (escritorio, tablet, móvil)
- ✅ **Código limpio** y bien documentado

## 📁 Estructura de Archivos

```
├── index.html           # Estructura HTML principal
├── styles.css          # Estilos CSS con variables personalizables
├── app.js              # Lógica JavaScript de la aplicación
├── slides-data.js      # Datos de las diapositivas
├── logo.png            # Logo del colegio (opcional)
└── README.md           # Esta documentación
```

## 🎨 Personalización

### Cambiar Nombre del Colegio

En el archivo `app.js`, busca la línea en el método `renderSlide()` que dice:
```html
<h3>Nombre del Colegio</h3>
```

Reemplázala con el nombre de tu institución:
```html
<h3>Instituto Educativo XYZ</h3>
```

### Cambiar Nombre del Curso

En el archivo `slides-data.js`, modifica la propiedad `course` de cada diapositiva:

```javascript
{
    id: 1,
    type: "title",
    title: "Fundamentos de Matemáticas",
    subtitle: "Conceptos Esenciales y Aplicaciones",
    author: "Presentación Educativa",
    description: "Una exploración completa de los principios fundamentales de la matemática",
    course: "11° Grado"  // Cambia este valor
}
```

### Agregar Logo del Colegio

1. Coloca tu imagen de logo en la misma carpeta que `index.html`
2. Asegúrate de que se llame `logo.png` o actualiza el nombre en `app.js`
3. El logo debe ser una imagen cuadrada para mejor visualización
4. Tamaño recomendado: 200x200 px mínimo

**Nota:** Si la imagen no se carga, aparecerá un placeholder con la letra "S".

### Personalización de Colores

Los colores se definen como variables CSS en `styles.css`. Para cambiarlos, edita la sección **VARIABLES DE COLOR** al inicio del archivo:

```css
:root {
    /* Paleta de colores principal - MODIFICA ESTOS VALORES */
    --primary-color: #2563eb;      /* Azul principal */
    --primary-dark: #1e40af;       /* Azul oscuro */
    --primary-light: #dbeafe;      /* Azul claro */
    
    --secondary-color: #10b981;    /* Verde secundario */
    --secondary-light: #d1fae5;    /* Verde claro */
    
    --accent-color: #f59e0b;       /* Amarillo/Naranja */
    --accent-light: #fef3c7;       /* Amarillo claro */
    
    /* ... más variables ... */
}
```

#### Ejemplos de Paletas Recomendadas

**Paleta Corporativa (Azul-Gris):**
```css
--primary-color: #1e3a8a;
--primary-dark: #0f172a;
--primary-light: #e0e7ff;
--secondary-color: #6b7280;
--accent-color: #06b6d4;
```

**Paleta Vibrante (Púrpura-Rosa):**
```css
--primary-color: #7c3aed;
--primary-dark: #5b21b6;
--primary-light: #ede9fe;
--secondary-color: #db2777;
--accent-color: #f59e0b;
```

**Paleta Natural (Verde-Tierra):**
```css
--primary-color: #059669;
--primary-dark: #065f46;
--primary-light: #d1fae5;
--secondary-color: #b45309;
--accent-color: #dc2626;
```

## 🌓 Cambio de Tema (Claro/Oscuro)

La aplicación incluye un botón para cambiar entre modo claro y oscuro:

- **Botón de tema**: Ubicado en la barra superior derecha (icono de luna/sol)
- **Almacenamiento**: La preferencia se guarda en `localStorage`
- **Detección automática**: Si no hay preferencia guardada, detecta el tema del sistema
- **Cambio suave**: Las transiciones son animadas para una mejor experiencia

### Cómo funciona:

1. Haz clic en el botón de tema (luna/sol) en la esquina superior derecha
2. El tema cambia automáticamente
3. Tu preferencia se guarda en el navegador
4. La próxima vez que abras la presentación, usará tu tema elegido

## 📝 Editar Diapositivas

Las diapositivas se definen en `slides-data.js`. Cada diapositiva es un objeto en el array `slides`:

### Estructura Básica de una Diapositiva

```javascript
{
    id: 1,
    type: "content",          // "content" o "title"
    title: "Título",
    subtitle: "Subtítulo",
    course: "10° Grado",       // Nombre del curso
    content: `
        <p>Contenido en HTML...</p>
        <div class="math-block">
            $$\\text{Fórmula matemática}$$
        </div>
    `
}
```

### Ejemplo: Agregar una Nueva Diapositiva

```javascript
{
    id: 11,
    type: "content",
    title: "Nuevo Tema",
    subtitle: "Descripción del tema",
    course: "10° Grado",
    content: `
        <p>Este es el contenido de mi diapositiva.</p>
        
        <p><strong>Ejemplo:</strong></p>
        <div class="math-block">
            $$E = mc^2$$
        </div>
        
        <ul>
            <li>Punto 1</li>
            <li>Punto 2</li>
            <li>Punto 3</li>
        </ul>
    `
}
```

## 🧮 Escribir Fórmulas Matemáticas

La aplicación usa **MathJax 3** para renderizar expresiones matemáticas. Hay dos formas:

### 1. En un Bloque (Centrado)

```html
<div class="math-block">
    $$f(x) = ax^2 + bx + c$$
</div>
```

### 2. Inline (En medio del texto)

```html
<p>La fórmula <span class="math-inline">$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$</span> se usa para...</p>
```

### Ejemplos de Notación LaTeX

- **Superíndice:** `x^2` → x²
- **Subíndice:** `x_1` → x₁
- **Fracción:** `\frac{a}{b}` → a/b
- **Raíz:** `\sqrt{x}` → √x
- **Suma:** `\sum_{i=1}^{n}` → ∑
- **Integral:** `\int_a^b` → ∫
- **Límite:** `\lim_{x \to 0}` → lim
- **Matriz:** `\begin{pmatrix} a & b \\ c & d \end{pmatrix}`

Para más información, visita [MathJax Documentation](https://docs.mathjax.org/).

## 🎮 Controles

| Acción | Método |
|--------|--------|
| Siguiente diapositiva | Botón, Flecha Derecha, Espacio |
| Diapositiva anterior | Botón, Flecha Izquierda |
| Cambiar tema | Botón de luna/sol en header |
| Pantalla completa | Botón, Tecla F |
| Ver progreso | Barra superior |
| Ver número actual | Contador inferior |

## 💻 Requisitos Técnicos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar MathJax desde CDN)
- JavaScript habilitado

## 🚀 Uso

1. Abre `index.html` en tu navegador
2. Usa los botones o el teclado para navegar
3. Haz clic en el botón de tema para cambiar entre claro/oscuro
4. Presiona F para pantalla completa
5. Las expresiones matemáticas se renderizarán automáticamente

## 📱 Responsividad

La aplicación se adapta automáticamente a diferentes tamaños de pantalla:

- **Escritorio (>1024px):** Diseño completo con márgenes amplios
- **Tablet (768px-1024px):** Diseño optimizado para pantalla táctil
- **Móvil (<768px):** Interfaz compacta, botones grandes, header simplificado

## 🔧 Arquitectura

### HTML (`index.html`)
- Estructura semántica
- Accesibilidad (ARIA, semantic HTML5)
- Carga de bibliotecas externas

### CSS (`styles.css`)
- **Variables CSS** para personalización fácil
- **Metodología BEM** para nombres de clases
- **Media queries** para responsive
- **Animaciones** suaves con transiciones CSS
- **Modo oscuro** manual y automático

### JavaScript (`app.js`)
- **Clase PresentationApp** con métodos claros
- **Separación de responsabilidades**
- **Manejo de eventos** eficiente
- **Gestión de tema** con localStorage
- **Documentación en JSDoc**

### Datos (`slides-data.js`)
- Array de objetos estructurados
- Fácil de editar y mantener
- Separado de la lógica

## 📚 Buenas Prácticas Implementadas

✅ **Código limpio y documentado**
- Comentarios claros en secciones importantes
- Nombres de variables descriptivos
- Funciones con una responsabilidad única

✅ **Accesibilidad (a11y)**
- Atributos `title` en botones
- Navegación por teclado completa
- Contraste de colores adecuado
- Etiquetas semánticas

✅ **Rendimiento**
- Sin dependencias externas innecesarias
- Animaciones con CSS (no JavaScript)
- Carga diferida de MathJax
- Código modular

✅ **Diseño responsivo**
- Mobile-first approach
- Unidades relativas (rem, %)
- Flexbox y Grid donde corresponde

✅ **Mantenibilidad**
- Estructura clara de carpetas
- Variables CSS para temas
- Datos separados de la lógica
- Almacenamiento de preferencias

## 🐛 Resolución de Problemas

### Las fórmulas matemáticas no se muestran
- Verifica que tengas conexión a internet
- Abre la consola del navegador (F12) para ver errores
- MathJax tarda un momento en cargar, espera un poco

### Los colores no cambian
- Asegúrate de editar las variables CSS en `:root`
- Limpia el caché del navegador (Ctrl+Shift+Delete)
- Recarga la página (F5)

### El logo no aparece
- Verifica que el archivo `logo.png` esté en la misma carpeta que `index.html`
- Intenta con otro formato de imagen (JPG, SVG)
- Revisa la consola del navegador para mensajes de error

### La navegación por teclado no funciona
- Asegúrate de que el foco esté en la ventana del navegador
- Algunos navegadores pueden tener restricciones en modo kiosko

### El tema no se guarda
- Verifica que localStorage esté habilitado en tu navegador
- En navegación privada/incógnita, localStorage puede estar deshabilitado

## 📄 Licencia

Esta aplicación es de código abierto. Siéntete libre de modificarla y usarla en tus proyectos.

## 👥 Autor

Creado como una herramienta educativa moderna para presentaciones de matemáticas.

---

**Última actualización:** 2024
**Versión:** 2.0
**Cambios en v2.0:**
- Agregada sección superior con logo y nombre del colegio
- Implementado cambio de tema claro/oscuro
- Mejorada la estructura de las diapositivas
- Agregado soporte para nombre del curso
- Optimizado para responsividad mejorada
