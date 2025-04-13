document.addEventListener('DOMContentLoaded', function() {
    // Cargar fuente
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Crear estructura
    const header = `
    <header class="main-header">
        <div class="logo-container">
            <img src="images/colibri-logo.jpg" alt="Logo Tanteamo" class="logo">
             <a href="index.html" class="site-title">TANTEAMO</a>
        </div>
        <div class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    <div class="nav-container">
        <nav>
            <ul class="menu">
                <li><a href="index.html">HOME</a></li>
                <li><a href="arte.html">ART</a></li>
                <li><a href="ciencia.html">SCI-TECH</a></li>
                <li><a href="vida.html">LIVING</a></li>
            </ul>
        </nav>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', header);

    // Funcionalidad del menú
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-container');
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Ajustar padding del body al cargar
    if (window.innerWidth <= 768) {
        document.body.style.paddingRight = '0';
    }
});
