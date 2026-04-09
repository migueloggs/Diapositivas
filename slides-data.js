/**
 * DATOS DE LAS DIAPOSITIVAS
 * Estructura: array de objetos con propiedades de cada diapositiva
 * Personaliza el contenido según tus necesidades
 */

const slides = [
    {
        // Diapositiva 1: Título
        id: 1,
        type: "title",
        title: "Fundamentos de Matemáticas",
        subtitle: "Conceptos Esenciales y Aplicaciones",
        author: "Presentación Educativa",
        description: "Una exploración completa de los principios fundamentales de la matemática",
        course: "10° Grado"
    },
    {
        // Diapositiva 2: Álgebra Básica
        id: 2,
        type: "content",
        title: "Álgebra Básica",
        subtitle: "Ecuaciones Lineales",
        course: "10° Grado",
        content: `
            <p>Las ecuaciones lineales son expresiones matemáticas que relacionan variables de primer grado.</p>
            
            <div class="math-block">
                $$ax + b = c$$
            </div>
            
            <p><strong>Ejemplo:</strong> Resuelve la ecuación:</p>
            <div class="math-block">
                $$2x + 5 = 13$$
            </div>
            
            <p><strong>Solución:</strong></p>
            <ul>
                <li>Restar 5 de ambos lados: $2x = 8$</li>
                <li>Dividir por 2: $x = 4$</li>
            </ul>
        `
    },
    {
        // Diapositiva 3: Funciones Cuadráticas
        id: 3,
        type: "content",
        title: "Funciones Cuadráticas",
        subtitle: "Parábolas y Raíces",
        course: "10° Grado",
        content: `
            <p>Una función cuadrática es una función polinómica de grado 2:</p>
            
            <div class="math-block">
                $$f(x) = ax^2 + bx + c$$
            </div>
            
            <p>Para encontrar las raíces usamos la fórmula cuadrática:</p>
            <div class="math-block">
                $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
            </div>
            
            <p><strong>El discriminante</strong> $\\Delta = b^2 - 4ac$ determina:</p>
            <ul>
                <li>Si $\\Delta > 0$: dos raíces reales distintas</li>
                <li>Si $\\Delta = 0$: una raíz real doble</li>
                <li>Si $\\Delta < 0$: no hay raíces reales</li>
            </ul>
        `
    },
    {
        // Diapositiva 4: Geometría
        id: 4,
        type: "content",
        title: "Geometría",
        subtitle: "Áreas y Perímetros",
        course: "10° Grado",
        content: `
            <p>Las fórmulas geométricas nos permiten calcular propiedades de figuras:</p>
            
            <p><strong>Triángulo:</strong></p>
            <div class="math-block">
                $$A_{\\text{triángulo}} = \\frac{1}{2} \\times \\text{base} \\times \\text{altura}$$
            </div>
            
            <p><strong>Círculo:</strong></p>
            <div class="math-block">
                $$A_{\\text{círculo}} = \\pi r^2 \\quad | \\quad C = 2\\pi r$$
            </div>
            
            <p><strong>Esfera:</strong></p>
            <div class="math-block">
                $$V_{\\text{esfera}} = \\frac{4}{3}\\pi r^3$$
            </div>
        `
    },
    {
        // Diapositiva 5: Trigonometría
        id: 5,
        type: "content",
        title: "Trigonometría",
        subtitle: "Razones Trigonométricas",
        course: "10° Grado",
        content: `
            <p>Las razones trigonométricas relacionan los ángulos con los lados de un triángulo rectángulo:</p>
            
            <div class="math-block">
                $$\\sin(\\theta) = \\frac{\\text{opuesto}}{\\text{hipotenusa}}$$
                $$\\cos(\\theta) = \\frac{\\text{adyacente}}{\\text{hipotenusa}}$$
                $$\\tan(\\theta) = \\frac{\\text{opuesto}}{\\text{adyacente}}$$
            </div>
            
            <p><strong>Identidad Pitagórica Fundamental:</strong></p>
            <div class="math-block">
                $$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$
            </div>
            
            <p>Estas funciones son periódicas y aparecen en fenómenos ondulatorios y oscilatorios.</p>
        `
    },
    {
        // Diapositiva 6: Cálculo Diferencial
        id: 6,
        type: "content",
        title: "Cálculo Diferencial",
        subtitle: "Derivadas",
        course: "10° Grado",
        content: `
            <p>La derivada mide cómo cambia una función respecto a la variable independiente:</p>
            
            <div class="math-block">
                $$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$
            </div>
            
            <p><strong>Reglas de Derivación Importantes:</strong></p>
            <ul>
                <li>Potencia: $(x^n)' = nx^{n-1}$</li>
                <li>Producto: $(uv)' = u'v + uv'$</li>
                <li>Cociente: $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$</li>
                <li>Cadena: $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$</li>
            </ul>
        `
    },
    {
        // Diapositiva 7: Cálculo Integral
        id: 7,
        type: "content",
        title: "Cálculo Integral",
        subtitle: "Antiderivadas y Área",
        course: "10° Grado",
        content: `
            <p>La integral es la operación inversa de la derivación:</p>
            
            <div class="math-block">
                $$\\int f(x) \\, dx = F(x) + C$$
            </div>
            
            <p>donde $F'(x) = f(x)$ y $C$ es la constante de integración.</p>
            
            <p><strong>Integral Definida:</strong></p>
            <div class="math-block">
                $$\\int_a^b f(x) \\, dx = F(b) - F(a)$$
            </div>
            
            <p>Representa el área bajo la curva entre $x = a$ y $x = b$.</p>
            
            <p><strong>Integrales Comunes:</strong></p>
            <ul>
                <li>$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (cuando $n \\neq -1$)</li>
                <li>$\\int e^x \\, dx = e^x + C$</li>
                <li>$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$</li>
            </ul>
        `
    },
    {
        // Diapositiva 8: Álgebra Lineal
        id: 8,
        type: "content",
        title: "Álgebra Lineal",
        subtitle: "Matrices y Determinantes",
        course: "10° Grado",
        content: `
            <p>Las matrices son arreglos rectangulares de números:</p>
            
            <div class="math-block">
                $$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$
            </div>
            
            <p><strong>Determinante de una matriz 2×2:</strong></p>
            <div class="math-block">
                $$\\det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$
            </div>
            
            <p>El determinante es importante para:</p>
            <ul>
                <li>Resolver sistemas de ecuaciones lineales</li>
                <li>Encontrar inversas de matrices</li>
                <li>Calcular áreas y volúmenes</li>
            </ul>
        `
    },
    {
        // Diapositiva 9: Probabilidad y Estadística
        id: 9,
        type: "content",
        title: "Probabilidad y Estadística",
        subtitle: "Distribuciones y Variables Aleatorias",
        course: "10° Grado",
        content: `
            <p>La probabilidad mide la ocurrencia de eventos aleatorios:</p>
            
            <div class="math-block">
                $$P(A) = \\frac{\\text{casos favorables}}{\\text{casos totales}}$$
            </div>
            
            <p><strong>Distribución Normal (Gaussiana):</strong></p>
            <div class="math-block">
                $$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$
            </div>
            
            <p>donde $\\mu$ es la media y $\\sigma$ es la desviación estándar.</p>
            
            <p><strong>Conceptos Clave:</strong></p>
            <ul>
                <li>Valor esperado: $E[X] = \\sum x_i P(x_i)$</li>
                <li>Varianza: $\\text{Var}(X) = E[X^2] - (E[X])^2$</li>
                <li>Desviación estándar: $\\sigma = \\sqrt{\\text{Var}(X)}$</li>
            </ul>
        `
    },
    {
        // Diapositiva 10: Números Complejos
        id: 10,
        type: "content",
        title: "Números Complejos",
        subtitle: "Forma Rectangular y Polar",
        course: "10° Grado",
        content: `
            <p>Los números complejos extienden los números reales con la unidad imaginaria $i$ donde $i^2 = -1$:</p>
            
            <div class="math-block">
                $$z = a + bi$$
            </div>
            
            <p><strong>Forma Polar:</strong></p>
            <div class="math-block">
                $$z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$$
            </div>
            
            <p>donde $r = |z| = \\sqrt{a^2 + b^2}$ es el módulo y $\\theta = \\arg(z)$ es el argumento.</p>
            
            <p><strong>Operaciones Fundamentales:</strong></p>
            <ul>
                <li>Suma: $(a + bi) + (c + di) = (a + c) + (b + d)i$</li>
                <li>Producto: $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$</li>
                <li>Conjugado: $\\overline{z} = a - bi$</li>
            </ul>
        `
    }
];
