document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  // Abre a imagem ampliada ao clicar
  galleryItems.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const caption = card.querySelector('.caption');
      
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxCaption.textContent = caption ? caption.textContent : img.alt;
    });
  });

  // Fecha o lightbox
  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Fecha ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Fecha com a tecla Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
    }
  });
});