const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const offcanvas = document.querySelector('.offcanvas');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
    offcanvasInstance.hide();
  });
});
