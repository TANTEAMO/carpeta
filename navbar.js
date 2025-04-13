document.addEventListener('DOMContentLoaded', function() {
    // ===== 1. CARGAR FUENTE DINÁMICAMENTE =====
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // ===== 2. INSERTAR HEADER CON LOGO =====
    const headerHTML = `
    <header class="main-header">
        <div class="logo-container">
            <img src="images/logo-colibri.png" alt="Logo Tanteamo" class="logo">
            <h1>TANTEAMO</h1>
        </div>
    </header>
    `;

    // ===== 3. INSERTAR MENÚ DERECHO =====
    const navHTML = `
    <div class="nav-container">
        <nav>
            <ul class="menu">
                <li><a href="index.html">HOME</a></li>
                <li><a href="arte.html">ART</a></li>
                <li><a href="ciencia.html">SCI-TECH</a></li>
                <li><a href="vida.html">VIDA</a></li>
            </ul>
        </nav>
    </div>
    `;

    // ===== 4. AÑADIR AL DOCUMENTO =====
    document.body.insertAdjacentHTML('afterbegin', headerHTML + navHTML);

    // ===== 5. ESTILOS DINÁMICOS (opcional) =====
    const dynamicStyles = `
    <style>
        .menu li:hover {
            background: #2b3035 !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
    </style>
    `;
    document.head.insertAdjacentHTML('beforeend', dynamicStyles);
});
