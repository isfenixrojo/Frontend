/**
 * Utilidades de DOM (sin dependencias).
 * Encapsulan la interacción con el menú móvil para mantener el
 * código del entry point limpio y reutilizable.
 */
export function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  if (!btn || !menu) return;

  const open = () => {
    menu.classList.remove('hidden');
    iconOpen?.classList.add('hidden');
    iconClose?.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    menu.classList.add('hidden');
    iconOpen?.classList.remove('hidden');
    iconClose?.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    menu.classList.contains('hidden') ? open() : close();
  });

  // Cerrar al pulsar cualquier enlace del menú
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
}

/** Delegación simple para cerrar el menú al redimensionar a escritorio. */
export function initResponsiveCleanup() {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('menu-btn');
      menu?.classList.add('hidden');
      btn?.setAttribute('aria-expanded', 'false');
    }
  });
}
