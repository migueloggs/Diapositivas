# 🖼️ INSTRUCCIONES PARA AGREGAR LOGO

## Pasos Simples

### Opción 1: Usando Logo PNG (Recomendado)

#### Paso 1: Preparar la Imagen
1. Consigue la imagen del logo de tu colegio
2. Preferentemente en PNG con fondo transparente
3. Tamaño mínimo: 200x200 píxeles
4. Tamaño ideal: 500x500 píxeles

#### Paso 2: Renombrar
1. Cambia el nombre a exactamente: **`logo.png`**
2. Verifica que sea minúscula

#### Paso 3: Colocar el Archivo
1. Coloca `logo.png` en la MISMA CARPETA que:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `slides-data.js`

#### Paso 4: Verificar
1. Abre `index.html` en navegador
2. Deberías ver tu logo en la esquina superior izquierda
3. ¡Listo!

**Estructura de carpetas:**
```
Mi Presentación/
├── index.html      ← AQUI
├── styles.css      ← AQUI
├── app.js          ← AQUI
├── slides-data.js  ← AQUI
└── logo.png        ← TU LOGO AQUI (MISMO NIVEL)
```

---

### Opción 2: Usando Logo JPG

Si prefieres JPG en lugar de PNG:

1. Renombra a: **`logo.jpg`**
2. Coloca en la misma carpeta
3. Abre `app.js`
4. Busca: `src="logo.png"`
5. Reemplaza con: `src="logo.jpg"`
6. Guarda y recarga navegador

---

### Opción 3: Usando Logo SVG

Para logos en formato vectorial:

1. Renombra a: **`logo.svg`**
2. Coloca en la misma carpeta
3. Abre `app.js`
4. Busca: `src="logo.png"`
5. Reemplaza con: `src="logo.svg"`
6. Guarda y recarga navegador

---

## Características del Logo

### Especificaciones Técnicas

| Propiedad | Especificación |
|-----------|---------------|
| Formato | PNG, JPG, SVG |
| Tamaño mínimo | 200x200 px |
| Tamaño ideal | 500x500 px |
| Forma | Preferiblemente cuadrado |
| Fondo | Transparente (PNG) o color sólido |
| Se mostrará como | 50x50 píxeles en presentación |

### Recomendaciones

✅ **Usar:**
- Logo sin fondo (transparente)
- Logo cuadrado
- Logo simple y legible
- Colores que contrasten

❌ **Evitar:**
- Logo con fondo de color
- Logo rectangular muy ancho
- Logo con mucho detalle
- Logos con texto pequeño

---

## Cómo Obtener tu Logo

### Opción 1: Descargarlo del Sitio Web
1. Ve al sitio web de tu colegio
2. Click derecho en el logo
3. "Guardar imagen como..."
4. Renombra a `logo.png`

### Opción 2: Contactar a tu Institución
1. Solicita al departamento de comunicaciones
2. Pide versión PNG sin fondo si es posible
3. Solicita logo de buena calidad (500x500 px mínimo)

### Opción 3: Usar Herramientas Online
1. Visita: https://remove.bg
2. Sube tu logo
3. Quita automáticamente el fondo
4. Descarga como PNG

---

## Solución de Problemas

### "El logo no aparece"

**Verifica:**
1. ✅ El nombre es exactamente `logo.png` (minúsculas)
2. ✅ Está en la misma carpeta que `index.html`
3. ✅ El archivo no está corrupto
4. ✅ Recargaste la página (Ctrl+R)

**Solución:**
```
Abre Developer Tools: F12
→ Pestaña "Network"
→ Busca "logo.png"
→ ¿Dice "404" o "Failed"?
  → Verifica ruta y nombre
```

### "El logo se ve pixelado"

**Causa:**
- Logo muy pequeño (menos de 200x200 px)

**Solución:**
- Consigue una versión de mayor resolución
- Tamaño mínimo: 500x500 px

### "El logo se ve estirado/deformado"

**Causa:**
- Logo no es cuadrado

**Solución:**
- Usa un editor de imagen (Paint, Photoshop, GIMP)
- Recorta a forma cuadrada
- Guarda como PNG

### "El logo cubre el texto"

**Causa:**
- Logo muy grande o posición incorrecta

**Solución:**
- Tamaño máximo: 50x50 px en presentación
- Si se ve muy grande, es problema de CSS
- Contactar soporte técnico

---

## Personalización Avanzada del Logo

### Cambiar Tamaño del Logo

Edita `styles.css`:

```css
.slide-logo {
    width: 50px;      /* ← Cambia este valor */
    height: 50px;     /* ← Cambia este valor */
    /* resto del código */
}
```

Ejemplos:
```css
/* Logo más pequeño */
width: 40px;
height: 40px;

/* Logo más grande */
width: 60px;
height: 60px;

/* Muy grande */
width: 100px;
height: 100px;
```

### Cambiar Posición del Logo

El logo está en la esquina superior izquierda por defecto.

Para moverlo, edita la estructura en `app.js`:

```javascript
// Actual (izquierda):
<div class="slide-header-left">
    <div class="slide-logo">...</div>
    <div class="slide-school-info">...</div>
</div>

// Para mover a derecha:
<div class="slide-header-right">
    <div class="slide-logo">...</div>
    <div class="slide-school-info">...</div>
</div>
```

### Cambiar Estilo del Logo

Edita `styles.css`:

```css
.slide-logo {
    /* Agregar borde */
    border: 2px solid #2563eb;
    
    /* O sombra */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    /* O rotación */
    transform: rotate(-5deg);
    
    /* O opacidad */
    opacity: 0.9;
}
```

---

## Verificación Final

### Checklist:

- [ ] Logo guardado como `logo.png`
- [ ] En la misma carpeta que `index.html`
- [ ] Abriste `index.html` en navegador
- [ ] Logo aparece en esquina superior izquierda
- [ ] Logo se ve claro y legible
- [ ] Logo no se ve pixelado
- [ ] Logo mantiene proporción correcta
- [ ] No cubre otros elementos

---

## Alternativas si no tienes Logo

### Si no tienes logo disponible:

**Opción 1: Usar Placeholder**
- El código tiene un SVG como fallback
- Muestra una letra "S" en azul
- Reemplácalo cuando tengas el logo

**Opción 2: Usar Iniciales**
Edita `app.js` y reemplaza:
```javascript
<div class="slide-logo">
    <img src="logo.png" ...>
</div>
```

Con:
```javascript
<div class="slide-logo">
    <p style="font-size: 24px; font-weight: bold; color: white;">ITP</p>
</div>
```

(Reemplaza "ITP" por las iniciales de tu colegio)

**Opción 3: Usar Icono Unicode**
```javascript
<div class="slide-logo">
    <span style="font-size: 30px;">🎓</span>
</div>
```

---

## Ejemplos de Logos Recomendados

### Estructura Ideal:

```
LOGO IDEAL:
┌─────────────┐
│             │
│   [LOGO]    │
│             │
└─────────────┘

LOGO NO IDEAL:
┌──────────────────────────────┐
│  [LOGO]        NOMBRE LARGO  │  ← Demasiado ancho
└──────────────────────────────┘

LOGO NO IDEAL:
┌────────────────────────────────────────┐
│  [LOGO]    NOMBRE COLEGIO CON MUCHO   │
│            TEXTO QUE NO CABE          │ ← Demasiado texto
└────────────────────────────────────────┘
```

---

## Soporte Técnico

Si tienes problemas con el logo:

1. **Verifica ruta:** 
   ```
   Mismo directorio: ✅ /Presentacion/logo.png
   No funcionará: ❌ /Presentacion/images/logo.png
   ```

2. **Verifica nombre:**
   ```
   Correcto: ✅ logo.png (minúsculas)
   No funcionará: ❌ Logo.png, LOGO.PNG, logo.PNG
   ```

3. **Verifica formato:**
   ```
   Soportados: ✅ .png, .jpg, .jpeg, .svg
   ```

4. **Limpia caché:**
   ```
   Ctrl + Shift + Delete
   Selecciona todo
   Limpia
   Recarga página
   ```

---

## Recursos Útiles

### Herramientas para Editar Logo:
- **GIMP** (Gratis) - https://www.gimp.org
- **Photoshop** (Pago) - https://www.adobe.com
- **Photopea** (Online) - https://www.photopea.com
- **Canva** (Online) - https://www.canva.com

### Herramientas para Quitar Fondo:
- **Remove.bg** - https://remove.bg
- **Cleanup.pictures** - https://cleanup.pictures
- **Photoshop** - Edit > Select Subject

### Convertir Formato:
- **CloudConvert** - https://cloudconvert.com
- **Convertio** - https://convertio.co

---

## FAQ (Preguntas Frecuentes)

**P: ¿Qué tamaño debo usar?**
R: 500x500 píxeles es ideal. Mínimo 200x200.

**P: ¿Qué formato es mejor?**
R: PNG con fondo transparente es lo mejor.

**P: ¿Dónde coloco el archivo?**
R: En la misma carpeta que index.html.

**P: ¿Cómo cambio el tamaño?**
R: Edita `styles.css`, propiedad `width` y `height` en `.slide-logo`

**P: ¿Puedo usar un logo rectangular?**
R: Sí, pero se cortará para hacerlo cuadrado.

**P: ¿Qué pasa si no tengo logo?**
R: El código muestra un SVG de fallback (letra "S")

**P: ¿Puedo usar un logotipo online?**
R: No recomendado (requiere internet), descargalo primero.

---

¡Listo! Ahora tu presentación lucirá profesional con tu logo. 🎓

**Última actualización:** 2024
**Versión:** 2.0
