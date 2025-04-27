  // Acción al hacer clic en "App Móvil"
  const appMovil = document.querySelector('.app-m-vil');
  if (appMovil) {
    appMovil.addEventListener('click', (e) => {
      e.preventDefault();
      alert('¡Gracias por visitar nuestra app! Próximamente estará disponible.');
  
    });
  }
  
  // 1. Efecto Hover y Click en los enlaces del Navbar
  
  const navLinks = document.querySelectorAll('.nav a, .nav div');
    
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.1)';
      link.style.transition = 'transform 0.3s';
      link.style.color = '#FFB84D'; // Color al pasar el mouse
    });
  
    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
      link.style.color = '#133e87'; // Color original
    });
  
    link.addEventListener('click', () => {
      // Agregar clase activa solo al link clickeado
      navLinks.forEach(l => l.classList.remove('activo'));
      link.classList.add('activo');
    });
  });
  
  
  
    // Copiar correo al portapapeles al hacer clic
  
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
  
  
  