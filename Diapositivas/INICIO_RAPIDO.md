# 🚀 INICIO RÁPIDO - Presentación de Diapositivas v2.0

## 📦 Archivos Incluidos

```
Diapositivas/
├── index.html                      # Archivo principal (abrir este en el navegador)
├── styles.css                      # Estilos CSS
├── app.js                          # Lógica JavaScript
├── slides-data.js                  # Contenido de las diapositivas
├── logo.png                        # Coloca tu logo aquí (opcional)
├── README.md                       # Documentación completa
├── GUIA_PERSONALIZACION.md        # Guía rápida de personalización
├── CAMBIOS_REALIZADOS.md          # Detalles de cambios v1.0 → v2.0
└── PERSONALIZACION_AVANZADA.md    # Ejemplos avanzados
```

## ⚡ Pasos para Empezar

### 1. Descargar y Extraer
- Descarga todos los archivos
- Colócalos en una carpeta llamada `Presentacion`

### 2. Abrir en Navegador
- Abre **`index.html`** con tu navegador web
- (Chrome, Firefox, Safari o Edge recomendado)

### 3. Personalizar (Opcional)
Edita estos archivos con un editor de texto:
- `app.js` → Cambiar nombre del colegio
- `slides-data.js` → Cambiar curso y contenido
- `styles.css` → Cambiar colores

### 4. Agregar Logo (Opcional)
- Prepara una imagen PNG cuadrada (200x200px mínimo)
- Renómbrala como `logo.png`
- Colócala en la misma carpeta que `index.html`

## 🎮 Controles

| Acción | Método |
|--------|--------|
| Siguiente | Botón, → Flecha, Espacio |
| Anterior | Botón, ← Flecha |
| Tema | Botón Luna/Sol |
| Pantalla completa | Botón, Tecla F |

## 🎨 Personalización Rápida (3 Pasos)

### Paso 1: Nombre del Colegio
Abre `app.js`, busca "Nombre del Colegio" y reemplaza:
```javascript
// Línea ~140 y ~155
<h3>Tu Colegio Aquí</h3>
```

### Paso 2: Nombre del Curso
Abre `slides-data.js`, busca "course:" y reemplaza:
```javascript
course: "Tu Curso Aquí"  // ejemplo: "10° A"
```

### Paso 3: Colores
Abre `styles.css`, edita las variables:
```css
:root {
    --primary-color: #2563eb;  // Tu color aquí
}
```

## 📖 Documentación Disponible

### Para Principiantes
- **GUIA_PERSONALIZACION.md** → Cambios básicos paso a paso
- **README.md** → Guía completa

### Para Usuarios Avanzados
- **PERSONALIZACION_AVANZADA.md** → Ejemplos avanzados de CSS/JS
- **CAMBIOS_REALIZADOS.md** → Detalles técnicos

## ✨ Características Principales

✅ **Presentación moderna** - Diseño limpio y profesional
✅ **Modo claro/oscuro** - Botón en la esquina superior
✅ **10 diapositivas** - Con contenido matemático
✅ **Fórmulas** - Soporta expresiones LaTeX
✅ **Responsivo** - Funciona en móvil, tablet y escritorio
✅ **Sin dependencias** - Solo HTML, CSS, JavaScript

## 🌟 Características Nuevas (v2.0)

🆕 **Sección superior** - Logo y nombre del colegio en cada diapositiva
🆕 **Botón de tema** - Cambio fácil entre claro y oscuro
🆕 **Almacenamiento** - Tu preferencia de tema se guarda
🆕 **Nombre del curso** - Visible en todas las diapositivas

## 📱 Compatibilidad

| Navegador | Soporte |
|-----------|---------|
| Chrome | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ✅ Completo |
| Edge | ✅ Completo |
| IE 11 | ❌ No soportado |

## 🔧 Requisitos Técnicos

- ✅ Navegador moderno (2020+)
- ✅ JavaScript habilitado
- ✅ Conexión a internet (para MathJax)
- ❌ No requiere instalación

## 💡 Consejos

1. **Copia de seguridad**: Guarda los archivos originales antes de editar
2. **Logo**: Usa un PNG con fondo transparente para mejor resultado
3. **Nombre largo**: Si es muy largo, considéra acortarlo
4. **Pruebas**: Prueba en varios navegadores
5. **Caché**: Si no ves cambios, limpia el caché (Ctrl+Shift+Delete)

## 🆘 Solución Rápida de Problemas

### "No veo cambios"
→ Limpia caché: Ctrl+Shift+Delete

### "Logo no aparece"
→ Verifica que sea `logo.png` en la misma carpeta

### "Tema no se guarda"
→ Usa navegación normal (no privada)

### "Fórmulas no se muestran"
→ Verifica conexión a internet

### "Texto se corta en móvil"
→ Usa nombres más cortos

## 📞 Soporte

Para problemas específicos, consulta:
1. **GUIA_PERSONALIZACION.md** - Para cambios básicos
2. **PERSONALIZACION_AVANZADA.md** - Para cambios avanzados
3. **README.md** - Para referencia completa

## 🎯 Próximos Pasos

1. ✅ Abre `index.html` en el navegador
2. ✅ Prueba la navegación y el cambio de tema
3. ✅ Personaliza según tus necesidades
4. ✅ Agrégale tu logo
5. ✅ ¡Usa en tu presentación!

## 📊 Estructura de Archivos

```
index.html
├─ Carga styles.css
├─ Carga app.js
└─ Carga slides-data.js

styles.css
├─ Variables de color (personalizables)
├─ Estilos base
└─ Responsive design

app.js
├─ Clase PresentationApp
├─ Gestión de navegación
└─ Gestión de tema

slides-data.js
├─ Array de 10 diapositivas
└─ Contenido matemático

logo.png (opcional)
└─ Tu logo del colegio
```

## 🎓 Contenido de las Diapositivas

1. **Portada** - Título de presentación
2. **Álgebra Básica** - Ecuaciones lineales
3. **Funciones Cuadráticas** - Parábolas y raíces
4. **Geometría** - Áreas y perímetros
5. **Trigonometría** - Razones trigonométricas
6. **Cálculo Diferencial** - Derivadas
7. **Cálculo Integral** - Antiderivadas
8. **Álgebra Lineal** - Matrices
9. **Probabilidad y Estadística** - Distribuciones
10. **Números Complejos** - Formas rectangulares

## 🔐 Información de Seguridad

- ✅ No requiere conexión constante (excepto para MathJax)
- ✅ No recopila datos personales
- ✅ Todo se ejecuta localmente en tu navegador
- ✅ Puedes usar offline después de cargar MathJax

## 📈 Estadísticas

- **10 diapositivas** con contenido
- **6 nuevas clases CSS** en v2.0
- **4 métodos nuevos** en JavaScript
- **0 dependencias externas** (excepto MathJax)
- **100+ líneas** de código nuevo

## 🎉 ¡Listo para Usar!

Tu presentación está lista. Solo abre `index.html` y comienza.

**Preguntas frecuentes:**

**P: ¿Cómo agrego más diapositivas?**
R: Edita `slides-data.js` y agrega un nuevo objeto al array

**P: ¿Puedo cambiar el contenido matemático?**
R: Sí, edita la propiedad `content` en `slides-data.js`

**P: ¿Cómo exporto como PDF?**
R: Usa Ctrl+P y "Guardar como PDF"

**P: ¿Funciona sin internet?**
R: Sí, excepto las fórmulas matemáticas (necesita MathJax)

**P: ¿Puedo proyectarlo en clase?**
R: Sí, abre en pantalla completa (tecla F)

---

**Versión:** 2.0
**Última actualización:** 2024
**Estado:** ✅ Listo para usar

¡Disfruta tu presentación! 🎉
