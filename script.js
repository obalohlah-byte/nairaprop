const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const headerActions = document.querySelector('.header-actions');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  headerActions.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); headerActions.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));
document.querySelectorAll('.faq-list details').forEach(item => {
  const symbol = item.querySelector('summary span');
  item.addEventListener('toggle', () => { if (symbol) symbol.textContent = item.open ? '×' : '+'; });
});
