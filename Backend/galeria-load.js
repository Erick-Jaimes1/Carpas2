document.addEventListener('DOMContentLoaded', function() {
    // Arrays de imágenes por categoría
    const galleryImages = {
        carpas: Array.from({length: 56}, (_, i) => `../../Public/ImagesCarpasCata/${i+1}.jpg`),
        
        carpas: Array.from({length: 56}, (_, i) => `../../Public/ImagesCarpasCata/${i+1}.jpg`),
        mesas: Array.from({length: 32}, (_, i) => `../../Public/ImagesMesasCata/${i+1}.jpg`),
        sillas: Array.from({length: 15}, (_, i) => `../../Public/ImagesSillasCata/${i+1}.jpg`),
        cristaleria: Array.from({length: 16}, (_, i) => `../../Public/ImagesCristaleriaCata/${i+1}.jpg`),
    };

    // Unir todas las imágenes para la vista "Todo"
    function getAllImages() {
        let all = [];
        for (const [category, arr] of Object.entries(galleryImages)) {
            all = all.concat(arr.map(img => ({category, image: img})));
        }
        return all;
    }

    let galleryData = getAllImages();
    const galleryGrid = document.getElementById('galleryGrid');
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    const modalImage = document.getElementById('modalImage');

    // Cargar solo imágenes en la galería
    function loadGallery(data) {
        galleryGrid.innerHTML = '';
        data.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'col-sm-6 col-md-4 col-lg-3 gallery-item';
            galleryItem.dataset.category = item.category;

            galleryItem.innerHTML = `
                <div class="card border-0 h-100 overflow-hidden shadow-sm">
                    <div class="card-img-container position-relative overflow-hidden">
                        <img src="${item.image}" class="card-img-top gallery-img" alt="" loading="lazy">
                    </div>
                </div>
            `;

            galleryGrid.appendChild(galleryItem);

            // Evento click para mostrar la imagen en el modal
            galleryItem.addEventListener('click', () => {
                modalImage.src = item.image;
                modalImage.alt = "";
                modal.show();
            });
        });
    }

    // Filtrar imágenes por categoría
    function filterGallery(category) {
        if (category === 'all') {
            galleryData = getAllImages();
        } else {
            galleryData = galleryImages[category].map(img => ({category, image: img}));
        }
        loadGallery(galleryData);
    }

    // Inicializar la galería
    loadGallery(galleryData);

    // Configurar los botones de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterGallery(this.dataset.filter);
        });
    });
});