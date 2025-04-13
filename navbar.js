// Carga el menú en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', `
    <nav>
        <ul class="menu">
            <li><a href="index.html">HOME</a></li>
            <li><a href="arte.html">ART</a></li>
            <li><a href="ciencia.html">SCI-TECH</a></li>
            <!-- Añade más enlaces -->
        </ul>
    </nav>
    `);
});
