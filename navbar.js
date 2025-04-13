document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', `
    <header class="main-header">
        <div class="logo-container">
            <img src="images/colibri-logo.png" alt="Logo Tanteamo" class="logo">
            <h1>TANTEAMO</h1>
        </div>
    </header>
    <div class="nav-container">
        <nav>
            <ul class="menu">
                <li><a href="index.html">HOME</a></li>
                <li><a href="arte.html">ARTE</a></li>
                <li><a href="vivir.html">VIVIR</a></li>
            </ul>
        </nav>
    </div>
    `);
});
