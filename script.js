(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Открыть меню');
    }));
  }
  const dialog = document.querySelector('#imageLightbox');
  const img = dialog?.querySelector('img');
  const caption = dialog?.querySelector('p');
  document.querySelectorAll('[data-zoom]').forEach(button => {
    button.addEventListener('click', () => {
      if (!dialog || !img || !caption) return;
      img.src = button.dataset.zoom;
      img.alt = button.dataset.zoomAlt || '';
      caption.textContent = button.dataset.zoomAlt || '';
      dialog.showModal();
    });
  });
  dialog?.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {if(event.target === dialog) dialog.close();});
})();
