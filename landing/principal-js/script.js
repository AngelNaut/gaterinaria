// script.js adaptado para nueva versión

document.addEventListener('DOMContentLoaded', () => {

    // 1. Efecto Hover y Click en los enlaces del Navbar
    const navLinks = document.querySelectorAll('.nav a, .nav div');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s';
        link.style.color = '#FFB84D'; // Color hover
      });
  
      link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
        link.style.color = '#133e87'; // Color original
      });
  
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('activo'));
        link.classList.add('activo');
      });
    });
  
  
    // 2. Mostrar mensaje al dar clic en 'Llamar para agendar una cita'
    const llamarBtn = document.querySelector('.llamar-para-agendar-una-cita');
  
    if (llamarBtn) {
      llamarBtn.addEventListener('click', () => {
        alert('Serás redirigido a WhatsApp para agendar tu cita.');
      });
    }
  
  
    // 3. Mostrar mensaje al dar clic en 'Ver nuestros servicios'
    const serviciosBtn = document.querySelector('.ver-nuestros-servicios');
  
    if (serviciosBtn) {
      serviciosBtn.addEventListener('click', () => {
        alert('Explora nuestros servicios exclusivos para gatos.');
      });
    }
  
  
    // 4. Acción al hacer clic en "App Móvil"
    const appMovil = document.querySelector('.app-m-vil');
  
    if (appMovil) {
      appMovil.addEventListener('click', (e) => {
        e.preventDefault();
        alert('¡Gracias por visitar nuestra app! Próximamente estará disponible.');
      });
    }
  
  
    // 5. Copiar correo al portapapeles al hacer clic
    const correo = document.querySelector('.ejemplo-gmail-com');
  
    if (correo) {
      correo.style.cursor = 'pointer';
      correo.title = 'Haz clic para copiar el correo';
  
      correo.addEventListener('click', () => {
        navigator.clipboard.writeText('ejemplo@gmail.com').then(() => {
          alert('Correo copiado al portapapeles: ejemplo@gmail.com');
        });
      });
    }
  
  
    // 6. Scroll dinámico para resaltar la sección actual
    const sections = document.querySelectorAll('section');
  
    window.addEventListener('scroll', () => {
      let scrollY = window.pageYOffset;
  
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.classList[0];
  
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('activo');
            if (link.classList.contains(sectionId)) {
              link.classList.add('activo');
            }
          });
        }
      });
    });
  
  });
  
  
  // Nota: Clase "activo" puede ser estilizada en CSS para resaltar el enlace activo.
  