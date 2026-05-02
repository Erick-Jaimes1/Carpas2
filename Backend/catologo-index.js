// Configuración de imágenes por categoría
        const catalogImages = {
            mesas: Array.from({length: 32}, (_, i) => `../../Public/ImagesMesasCata/${i+1}.jpg`),
            sillas: Array.from({length: 15}, (_, i) => `../../Public/ImagesSillasCata/${i+1}.jpg`),
            carpas: Array.from({length: 56}, (_, i) => `../../Public/ImagesCarpasCata/${i+1}.jpg`),
            cristaleria: Array.from({length: 16}, (_, i) => `../../Public/ImagesCristaleriaCata/${i+1}.jpg`)
        };
        
        // Variables globales
        let catalogSwiper;
        let testimonialsSwiper;
        const catalogModal = new bootstrap.Modal(document.getElementById('catalogModal'));
        
        // Función para abrir el modal del catálogo
        function openCatalogModal(category) {
    const swiperWrapper = document.getElementById('catalogSwiperWrapper');
    swiperWrapper.innerHTML = '';

    // Cargar imágenes de la categoría seleccionada
    catalogImages[category].forEach(image => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'swiper-image-container';

        const img = document.createElement('img');
        img.src = image;
        img.alt = category;
        img.className = 'img-fluid';
        img.loading = 'lazy';

        imgContainer.appendChild(img);
        slide.appendChild(imgContainer);
        swiperWrapper.appendChild(slide);
    });

    // Destruir Swiper anterior si existe
    if (catalogSwiper) {
        catalogSwiper.destroy(true, true);
        catalogSwiper = null;
    }

    // Inicializar Swiper nuevo
    catalogSwiper = new Swiper('.catalogSwiper', {
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
        },
    });

    // Mostrar el modal
    catalogModal.show();
}
        
        // Inicializar Swiper de testimonios
        function initTestimonialsSwiper() {
            testimonialsSwiper = new Swiper('.testimonialsSwiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    }
                }
            });
        }
        
        // Cerrar modal al hacer clic fuera del contenido
        document.getElementById('catalogModal').addEventListener('click', function(e) {
            if (e.target === this) {
                catalogModal.hide();
            }
        });
        
        // Inicializar cuando el DOM esté listo
        document.addEventListener('DOMContentLoaded', function() {
            initTestimonialsSwiper();
        });