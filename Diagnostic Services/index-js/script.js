document.addEventListener('DOMContentLoaded', () => {
    // Efecto hover en enlaces del navbar
    const navLinks = document.querySelectorAll('.nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.color = '#FFB84D'; // Color al pasar el mouse
      });
  
      link.addEventListener('mouseout', () => {
        link.style.color = '#133e87'; // Color original
      });
    });
  
    // Acción al hacer clic en "App Móvil"
    const appMovil = document.querySelector('.app-m-vil');
    if (appMovil) {
      appMovil.addEventListener('click', (e) => {
        e.preventDefault();
        alert('¡Gracias por visitar nuestra app! Próximamente estará disponible.');
        // Para redirigir más adelante, descomenta esto:
        // window.location.href = appMovil.href;
      });
    }
  
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
  });
  