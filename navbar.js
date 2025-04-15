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
                <li><a href="vida.html">VIDA</a></li>
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
            <button id="back-button" class="back-button">
                ← Volver
            </button>
            ${postHTML}
        `;
        postContainer.style.display = 'block';

        // Botón de volver
        document.getElementById('back-button').addEventListener('click', () => {
            postContainer.style.display = 'none';
            postContainer.innerHTML = '';
            blogFeed.style.display = 'grid';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    // Eventos para tarjetas de posts
    document.querySelectorAll('.post-preview, .read-more').forEach(element => {
        element.addEventListener('click', async (e) => {
            e.preventDefault();
            const postFile = element.closest('.post-preview').dataset.post;
            const postHTML = await loadPost(postFile);
            showPost(postHTML);
            
            // Scroll suave
            window.scrollTo({
                top: document.getElementById('post-container').offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}); // FIN DEL DOMContentLoaded
