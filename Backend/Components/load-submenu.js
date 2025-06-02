// load-submenu.js
function initHamburgerMenu() {
    const hamburgerButton = document.getElementById("hamburgerButton");
    const collapsedMenu = document.getElementById("collapsedMenu");
    const overlay = document.getElementById("menuOverlay");

    if (!hamburgerButton || !collapsedMenu || !overlay) {
        console.error("Uno o más elementos no se encontraron en el DOM.");
        return;
    }

    hamburgerButton.addEventListener("click", function () {
        collapsedMenu.classList.toggle("show");
        overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", function () {
        collapsedMenu.classList.remove("show");
        overlay.classList.remove("show");
    });
}

// Si se carga directamente, ejecutarlo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburgerMenu);
} else {
    initHamburgerMenu();
}

// También exportarlo
window.initHamburgerMenu = initHamburgerMenu;

// ...existing code...

// Lógica para submenu en menú hamburguesa (móvil)
function initMobileSubmenu() {
    const mobileSubmenu = document.getElementById("mobileSubmenu");
    const submenuToggle = document.getElementById("mobileSubmenuToggle");
    if (!submenuToggle || !mobileSubmenu) return;

    // Oculta el submenu por defecto
    mobileSubmenu.style.display = "none";

    // Solo despliega el submenu si se hace clic en la flecha
    submenuToggle.addEventListener("click", function (e) {
        e.preventDefault();
        mobileSubmenu.style.display = (mobileSubmenu.style.display === "none") ? "block" : "none";
    });
}

// Modifica la inicialización para incluir el submenu móvil
function initHamburgerMenu() {
    const hamburgerButton = document.getElementById("hamburgerButton");
    const collapsedMenu = document.getElementById("collapsedMenu");
    const overlay = document.getElementById("menuOverlay");

    if (!hamburgerButton || !collapsedMenu || !overlay) {
        console.error("Uno o más elementos no se encontraron en el DOM.");
        return;
    }

    hamburgerButton.addEventListener("click", function () {
        collapsedMenu.classList.toggle("show");
        overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", function () {
        collapsedMenu.classList.remove("show");
        overlay.classList.remove("show");
    });

    // Inicializa el submenu móvil
    initMobileSubmenu();
}

