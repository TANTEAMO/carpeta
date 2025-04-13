document.addEventListener('DOMContentLoaded', function() {
    // ===== 1. CARGAR RECURSOS =====
    // Fuente principal
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // ===== 2. CREAR ESTRUCTURA =====
    const header = `
    <header class="main-header" style="
        background: #2a2e35;
        height: 80px;
        border-bottom: 1px solid #3d434b;
    ">
        <div class="logo-container">
            <img src="images/logo-colibri.png" alt="Logo Tanteamo" class="logo">
            <h1 style="color: #f0f0f0">TANTEAMO</h1>
        </div>
    </header>`;

    const navbar = `
    <div class="nav-container" style="
        background: #2a2e35;
        top: 80px;
        height: calc(100vh - 80px);
        border-left: 1px solid #3d434b;
    ">
        <nav>
            <ul class="menu">
                <li><a href="index.html">HOME</a></li>
                <li><a href="arte.html">ART</a></li>
                <li><a href="tecnologia.html">TECNOLOGÍA</a></li>
                <li><a href="vida.html">VIDA</a></li>
            </ul>
        </nav>
    </div>`;

    // ===== 3. INSERTAR EN EL DOM =====
    document.body.insertAdjacentHTML('afterbegin', header + navbar);

    // ===== 4. ESTILOS DINÁMICOS =====
    const dynamicCSS = `
    <style>
        .menu li {
            background: #3a4048;
            margin-bottom: 6px;
            padding: 12px 20px;
            border-radius: 4px;
            border-left: 3px solid #6c5ce7;
            transition: all 0.3s ease;
        }
        .menu li:hover {
            background: #4a515a;
            transform: translateX(-5px);
            box-shadow: 2px 0 10px rgba(108, 92, 231, 0.3);
        }
        .menu a {
            color: white;
            text-decoration: none;
            display: block;
            text-align: right;
        }
    </style>
    `;
    document.head.insertAdjacentHTML('beforeend', dynamicCSS);
});
