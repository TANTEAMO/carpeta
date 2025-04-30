document.addEventListener('DOMContentLoaded', function() {
  // Menú principal
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  const header = `
    <header class="main-header">
      <div class="logo-container">
        
        <a href="index.html" class="site-title">K<img src="images/komype-logo2.png" alt="Logo Tantema" class="logo">MYPE</a>
      </div>
      <div class="slogan-container">
  <div class="slogan"></div>
  <div class="language-buttons">
    <button class="language-btn" id="spanish">ESP</button>
    <button class="language-btn" id="korean">KOR</button>
    <button class="language-btn" id="english">ENG</button>
  </div>
</div>
      <div class="menu-toggle">
        <span></span><span></span><span></span>
      </div>
    </header>
    <div class="nav-container hidden">
      <nav>
        <ul class="menu">
          <a href="index.html"><li data-text="Home"> <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-home" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -4;">
<path d="M3 9l9-7 9 7"/><path d="M9 22V12h6v10"/> 
</svg>
</li></a>
          <a href="solutions.html"><li data-text="Solutions"> <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-puzzle" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -8;">
<path d="M8 2a2 2 0 0 1 4 0v2h2a2 2 0 0 1 0 4h-2v2h2a2 2 0 0 1 0 4h-2v2a2 2 0 0 1-4 0v-2H6a2 2 0 0 1 0-4h2v-2H6a2 2 0 0 1 0-4h2V2z"/>
</svg>
</li></a>

<a href="news.html"><li data-text="News"> <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-newspaper" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -8;">
<path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 19V5h14v14H5zM7 7h10v2H7V7zm0 4h6v2H7v-2z"/>
</svg>
</li></a>


          <a href="contact.html"><li data-text="Contact"> <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-phone" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -6;">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.12 19.51 19.51 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.2 1.45.7 2.87 1.5 4.17a2 2 0 0 1-.45 2.37l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.37-.45c1.3.8 2.72 1.3 4.17 1.5A2 2 0 0 1 22 16.92z"/>
</svg>
</li></a>
        </ul>
      </nav>
    </div>`;
  document.body.insertAdjacentHTML('afterbegin', header);

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-container');
  const body = document.body;

  const toggleMenu = () => {
    const isHidden = nav.classList.contains('hidden');
    nav.classList.toggle('hidden', !isHidden);
    nav.classList.toggle('show', isHidden);
    toggle.classList.toggle('active', isHidden);
  };
  toggle.addEventListener('click', toggleMenu);
  document.querySelectorAll('.menu a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 820) toggleMenu();
    });
  });
  const languageButtonsContainer = document.querySelector('.language-buttons');
const menuToggle = document.querySelector('.menu-toggle');

const checkAndHideLanguageButtons = () => {
  if (window.innerWidth <= 820 && languageButtonsContainer) {
    const header = document.querySelector('.main-header');
    // Calcula si el ancho de los botones de idioma más un margen razonable
    // es mayor que el espacio disponible antes del botón de hamburguesa.
    // Ajusta el valor de 100 (margen) si es necesario.
    if (header && menuToggle && (languageButtonsContainer.offsetWidth + 100 > (menuToggle.offsetLeft - header.offsetLeft))) {
      languageButtonsContainer.style.display = 'none';
    } else {
      languageButtonsContainer.style.display = 'flex'; // O el display que tenga por defecto
    }
  } else if (languageButtonsContainer) {
    languageButtonsContainer.style.display = 'flex'; // Asegura que se muestren en pantallas más grandes
  }
};

// Llama a la función al cargar la página y al cambiar el tamaño de la ventana
checkAndHideLanguageButtons();
window.addEventListener('resize', checkAndHideLanguageButtons);

const setInitialMenuState = () => {
  if (window.innerWidth <= 820) {
    // En pantallas pequeñas, oculta por defecto
    if (!nav.classList.contains('show')) {
      nav.classList.add('hidden');
      nav.classList.remove('show');
      toggle.classList.remove('active');
      body.classList.remove('menu-open');
    }
  } else {
    // En pantallas anchas, visible por defecto
    nav.classList.remove('hidden');
    nav.classList.add('show');
    toggle.classList.remove('active');
    body.classList.remove('menu-open');
  }
};

// Eventos
toggle.addEventListener('click', toggleMenu);
document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 820) toggleMenu();
  });
});
window.addEventListener('resize', setInitialMenuState);
setInitialMenuState();

  // Helper para cargar un post
  const loadPost = async path => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error('Post no encontrado');
      return await res.text();
    } catch {
      return '<div style="padding:20px;background:#fee;border-radius:8px;color:#c00;">Error al cargar el post.</div>';
    }
  };

  // Render de gráficos inline
  const renderCharts = charts => {
    charts.forEach(chart => {
      const canvas = document.getElementById(chart.id);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      new Chart(ctx, {
        type: chart.type,
        data: chart.data,
        options: chart.options
      });
    });
  };

  // Mostrar el post
  const showPost = (html, charts) => {
    const feed = document.getElementById('blog-feed');
    const container = document.getElementById('post-container');
    const introSection = document.querySelector('.intro-section');
    const cajasSection = document.querySelector('.cajas');

    introSection.classList.add('hidden'); // Ocultar sección superior
    cajasSection.classList.add('hidden'); // Ocultar cajas
    feed.style.display = 'none';
    container.innerHTML = `
        <button id="back-top" class="back-button">← Volver</button>
        ${html}
        <button id="back-bottom" class="back-button">← Volver</button>
    `;
    container.style.display = 'block';

    renderCharts(charts);

    const goBack = () => {
      container.style.display = 'none';
      container.innerHTML = '';
      feed.style.display = 'grid';
      introSection.classList.remove('hidden'); // Restaurar sección superior
      cajasSection.classList.remove('hidden'); // Restaurar cajas
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.getElementById('back-top').onclick = goBack;
    document.getElementById('back-bottom').onclick = goBack;
  };

  // Inicializar feed de posts
  (async () => {
    try {
      const res = await fetch('posts.json');
      if (!res.ok) throw new Error('Error al cargar los posts');
      const posts = await res.json();

      const explora = posts.filter(p =>
        p.label === 'explora' ||
        (Array.isArray(p.label) && p.label.includes('explora'))
      );

      const feed = document.getElementById('blog-feed');
      if (explora.length === 0) {
        feed.innerHTML = '<p>No hay posts en Explora.</p>';
        return;
      }
      feed.innerHTML = explora.map(post => `
          <article class="post-preview" data-post='${JSON.stringify(post)}'>
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-excerpt">
              <h2>${post.title}</h2>
              <p>${post.description}</p>
              <button class="read-more">Leer más</button>
            </div>
          </article>
        `).join('');

      document.querySelectorAll('.post-preview').forEach(preview => {
        preview.addEventListener('click', async e => {
          e.preventDefault();
          const post = JSON.parse(preview.dataset.post);
          const html = await loadPost(post.post);
          const charts = Array.isArray(post.charts) ? post.charts : [];
          showPost(html, charts);
        });
      });
    } catch (err) {
      console.error(err);
      document.getElementById('blog-feed').innerHTML = '<p>Error cargando posts.</p>';
    }
  })();

  // Cargar post directamente desde URL (?post=nombre)
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("post");
  if (postId) {
    loadPost(`post/${postId}.html`).then(html => {
      showPost(html, []);
    });
  }

  // Funcionalidad para los botones de idioma
  document.getElementById('spanish').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  document.getElementById('korean').addEventListener('click', () => {
    window.location.href = 'index-kr.html';
  });

  document.getElementById('english').addEventListener('click', () => {
    window.location.href = 'index-en.html';
  });
});