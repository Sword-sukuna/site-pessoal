// scripts.js
document.addEventListener('DOMContentLoaded', () => {

  // 1) Animação de "fade-in" ao entrar na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // 2) Menu ativo conforme página (marca link com classe active)
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      link.classList.add('active');
    }
  });

  // 3) Suave quando um link interno for clicado (se você usar #anchors)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior: 'smooth'});
    });
  });

  // 4) Podemos adicionar comportamento extra: clique nas capas mostra modal (opcional)
  // Aqui vou deixar o modal desabilitado por padrão, já que você pediu que clic em imagens dos jogos
  // NÃO abra nada por clique a menos que queira — por isso deixei comentado:
  /*
  document.querySelectorAll('.card, .book-card, .game-card').forEach(c => {
    c.addEventListener('click', () => {
      // abrir modal com informações -> implementar se quiser
    });
  });
  */
});
