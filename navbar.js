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
        <div class="nav-container hidden">
            <nav>
                <ul class="menu">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="arte.html">ART</a></li>
                    <li><a href="ciencia.html">SCI-TECH</a></li>
                    <li><a href="vida.html">VIDA</a></li>
                </ul>
            </nav>
        </div>`;
    
    // Insertar el header en el body
    document.body.insertAdjacentHTML('afterbegin', header);

    // Funcionalidad del menú
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-container');
    const body = document.body;

    const toggleMenu = () => {
        const isMenuOpen = body.classList.contains('menu-open');
        
        if (!isMenuOpen) {
            // No fijamos el body, permitimos scroll natural
            body.classList.add('menu-open');
            toggle.classList.add('active');
            nav.classList.remove('hidden');
            nav.classList.add('show');
        } else {
            body.classList.remove('menu-open');
            toggle.classList.remove('active');
            nav.classList.remove('show');
            nav.classList.add('hidden');
        }
    };

    if (toggle) {
        toggle.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 820) {
                toggleMenu();
            }
        });
    });

    // Ajustar el estado inicial del menú
    const setInitialMenuState = () => {
        if (window.innerWidth <= 820) {
            nav.classList.add('hidden');
            nav.classList.remove('show');
            toggle.classList.remove('active');
            body.classList.remove('menu-open');
        } else {
            nav.classList.remove('hidden', 'show');
            toggle.classList.remove('active');
            body.classList.remove('menu-open');
        }
    };

    setInitialMenuState();

    // Función de ajuste al redimensionar la ventana
    const handleResize = () => {
        setInitialMenuState();
    };

    window.addEventListener('resize', handleResize);

    // =============================================
    // [CÓDIGO NUEVO - CARGADOR DE POSTS BLOG]
    // =============================================
    const loadPost = async (postFile) => {
        try {
            const response = await fetch(postFile);
            if (!response.ok) throw new Error('Post no encontrado');
            return await response.text();
        } catch (error) {
            console.error('Error cargando el post:', error);
            return '<div class="error-message" style="padding: 20px; background: #ffebee; border-radius: 8px; color: #c62828;">Error al cargar el post. Intenta nuevamente.</div>';
        }
    };

    const showPost = (postHTML) => {
        const blogFeed = document.querySelector('.blog-feed');
        const postContainer = document.getElementById('post-container');

        blogFeed.style.display = 'none';
        postContainer.innerHTML = `
            <button id="back-button-top" class="back-button">← Volver</button>
            ${postHTML}
            <button id="back-button-bottom" class="back-button">← Volver</button>
        `;
        postContainer.style.display = 'block';

        const goBack = () => {
            postContainer.style.display = 'none';
            postContainer.innerHTML = '';
            blogFeed.style.display = 'grid';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        document.getElementById('back-button-top').addEventListener('click', goBack);
        document.getElementById('back-button-bottom').addEventListener('click', goBack);
    };

    // Eventos para tarjetas de posts
    document.querySelectorAll('.post-preview, .read-more').forEach(element => {
        element.addEventListener('click', async (e) => {
            e.preventDefault();
            const postFile = element.closest('.post-preview').dataset.post;
            const postHTML = await loadPost(postFile);
            showPost(postHTML);

            window.scrollTo({
                top: document.getElementById('post-container').offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});