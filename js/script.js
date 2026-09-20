const nav = document.getElementById('siteNav');
  const onScroll = () => {
    if(window.scrollY > 40){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // fecha o menu mobile ao clicar em um link
  document.querySelectorAll('nav.links a').forEach(a=>{
    a.addEventListener('click', ()=>{ document.getElementById('menu-toggle').checked = false; });
  });

  // ---- Galeria de fotos (lightbox) ----
  // Cada chave é o valor de data-gallery do botão que abre a galeria.
  // Troque as URLs abaixo pelos caminhos reais das fotos em images/,
  // por exemplo: 'images/apto-01.jpg', 'images/apto-02.jpg' ...
  const galleries = {
    apartamento: [
      'https://picsum.photos/seed/brisamar-apto-1/1200/900',
      'https://picsum.photos/seed/brisamar-apto-2/1200/900',
      'https://picsum.photos/seed/brisamar-apto-3/1200/900',
      'https://picsum.photos/seed/brisamar-apto-4/1200/900',
    ],
    camping: [
    'https://picsum.photos/seed/beiradpraia-1/1200/900',
    'https://picsum.photos/seed/beiradpraia-2/1200/900',
    'https://picsum.photos/seed/beiradpraia-3/1200/900',
  ],
  };

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCount = document.getElementById('lightboxCount');
  let currentGallery = [];
  let currentIndex = 0;

  function renderLightbox(){
    lightboxImg.src = currentGallery[currentIndex];
    lightboxImg.alt = `Foto ${currentIndex + 1} de ${currentGallery.length}`;
    lightboxCount.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
  }

  function openLightbox(galleryKey){
    const photos = galleries[galleryKey];
    if(!photos || !photos.length) return;
    currentGallery = photos;
    currentIndex = 0;
    renderLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showPrev(){
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    renderLightbox();
  }

  function showNext(){
    currentIndex = (currentIndex + 1) % currentGallery.length;
    renderLightbox();
  }

  document.querySelectorAll('.gallery-trigger').forEach(btn=>{
    btn.addEventListener('click', ()=> openLightbox(btn.dataset.gallery));
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', showPrev);
  document.getElementById('lightboxNext').addEventListener('click', showNext);

  // fecha clicando fora da imagem
  lightbox.addEventListener('click', (e)=>{
    if(e.target === lightbox) closeLightbox();
  });

  // navegação e fechamento pelo teclado
  document.addEventListener('keydown', (e)=>{
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') showPrev();
    if(e.key === 'ArrowRight') showNext();
  });
