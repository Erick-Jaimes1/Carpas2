document.addEventListener('DOMContentLoaded', function () {
    fetch("/Views/Components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            if (typeof init === "function") {
                init();
            }

            // Cargar dinámicamente el script de submenú
            const submenuScript = document.createElement('script');
            submenuScript.src = "/Backend/Components/load-submenu.js";
            document.body.appendChild(submenuScript);
        })
        .catch(error => console.error('Error loading navbar:', error));
});
