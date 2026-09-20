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
  'images/fachada-brisamar.jpg',
  'images/quarto-dossel.jpg',
  'images/quarto-parede-azul-01.jpg',
  'images/quarto-parede-azul-02.jpg',
  'images/quarto-parede-azul-detalhe.jpg',
  'images/quarto-bege.jpg',
  'images/quarto-solteiro-duplo.jpg',
  'images/quarto-beliche.jpg',
  'images/quarto-rosa.jpg',
  'images/quarto-toalhas.jpg',
  'images/sala-sofa.jpg',
  'images/cozinha.jpg',
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

  // swipe no celular: arrasta o dedo pra esquerda/direita pra trocar de foto
let touchStartX = 0;
let touchStartY = 0;

lightbox.addEventListener('touchstart', (e)=>{
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

lightbox.addEventListener('touchend', (e)=>{
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  // só conta como swipe se o movimento horizontal for bem maior que o vertical
  // (evita confundir com um scroll acidental pra cima/baixo)
  if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) { showNext(); } else { showPrev(); }
  }
}, { passive: true });

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
