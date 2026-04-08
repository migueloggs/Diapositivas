<!-- GUÍA RÁPIDA DE PERSONALIZACIÓN -->

# Cambios Realizados - Versión 2.0

## 🆕 Nuevas Características

### 1. Sección Superior en Diapositivas
- **Logo del colegio**: Ubicado en la parte superior izquierda
- **Nombre del colegio**: Mostrado junto al logo
- **Nombre del curso**: Mostrado en la parte superior derecha
- **Diseño consistente**: Presente en todas las diapositivas

### 2. Cambio de Tema (Claro/Oscuro)
- **Botón de tema**: Luna/Sol en la barra superior derecha
- **Almacenamiento automático**: Tu preferencia se guarda
- **Detección del sistema**: Usa el tema preferido del SO si no hay preferencia guardada
- **Transiciones suaves**: Los cambios son animados

## 🔧 Cómo Personalizar

### Cambiar Nombre del Colegio

**Archivo:** `app.js`

**Busca (línea ~125 aproximadamente):**
```javascript
<h3>Nombre del Colegio</h3>
```

**Reemplaza con:**
```javascript
<h3>Tu Nombre de Colegio</h3>
```

*Nota: Aparece en dos lugares (uno para diapositivas normales y otro para titulo), así que cámbialo en ambos.*

### Cambiar Nombre del Curso

**Archivo:** `slides-data.js`

**Busca cada diapositiva y reemplaza:**
```javascript
course: "10° Grado"
```

**Con tu curso:**
```javascript
course: "11° A - Matemáticas Avanzadas"
```

### Agregar Logo del Colegio

1. **Prepara tu logo:**
   - Formato: PNG, JPG o SVG
   - Tamaño recomendado: 200x200 px
   - Preferiblemente cuadrado

2. **Copia el archivo:**
   - Nombra el archivo como `logo.png`
   - Coloca en la misma carpeta que `index.html`

3. **Verifica:**
   - Al abrir la presentación, el logo debería aparecer
   - Si no aparece, revisa que el nombre sea exacto

*Nota: Si cambias el nombre del archivo, actualiza también en `app.js` las líneas que dicen `src="logo.png"`*

### Cambiar Colores

**Archivo:** `styles.css` (líneas 1-50)

**Edita estas variables:**
```css
:root {
    --primary-color: #2563eb;      /* Color principal */
    --primary-dark: #1e40af;       /* Variante oscura */
    --primary-light: #dbeafe;      /* Variante clara */
    --secondary-color: #10b981;    /* Color secundario */
    --accent-color: #f59e0b;       /* Color acentuado */
}
```

## 📋 Lista de Verificación

Después de personalizar, verifica:

- [ ] Nombre del colegio aparece correctamente
- [ ] Nombre del curso aparece correctamente
- [ ] Logo se ve bien (si lo agregaste)
- [ ] Colores son consistentes con tu institución
- [ ] Tema oscuro/claro funciona (botón en la esquina superior derecha)
- [ ] La presentación se ve bien en móvil y escritorio
- [ ] Las fórmulas matemáticas se cargan correctamente

## 💡 Consejos

1. **Colores de logo:** Si el logo tiene fondo transparente, funcionará mejor
2. **Nombre largo:** Si el nombre del colegio es muy largo, considera acortarlo
3. **Responsividad:** El logo se ajusta automáticamente a pantallas pequeñas
4. **Backup:** Guarda una copia de los archivos originales antes de editar

## 🎨 Paletas de Color Sugeridas

### Profesional
```css
--primary-color: #003366;      /* Azul marino */
--primary-dark: #001a33;
--primary-light: #ccddee;
--secondary-color: #666666;    /* Gris */
--accent-color: #0099cc;       /* Azul cielo */
```

### Moderno
```css
--primary-color: #667eea;      /* Púrpura */
--primary-dark: #5568d3;
--primary-light: #e8e8f8;
--secondary-color: #764ba2;    /* Púrpura más oscuro */
--accent-color: #f093fb;       /* Rosa */
```

### Natural
```css
--primary-color: #2d6a4f;      /* Verde oscuro */
--primary-dark: #1b4332;
--primary-light: #d8f3dc;
--secondary-color: #40916c;    /* Verde más claro */
--accent-color: #95b46f;       /* Verde claro */
```

## 📞 Soporte

Si encuentras problemas:

1. **Logo no aparece:**
   - Verifica que el nombre sea exacto: `logo.png`
   - Prueba con otros formatos: `.jpg`, `.svg`

2. **Cambios no se ven:**
   - Limpia el caché: Ctrl+Shift+Delete
   - Recarga la página: F5 o Ctrl+R

3. **Tema no se guarda:**
   - Desactiva la navegación privada
   - Verifica que localStorage esté habilitado

4. **Texto se corta:**
   - Usa nombres más cortos
   - Prueba en diferentes navegadores

---

**¡Listo!** Tu presentación personalizada está lista para usar.
