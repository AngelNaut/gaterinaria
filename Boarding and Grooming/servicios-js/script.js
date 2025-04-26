document.addEventListener('DOMContentLoaded', () => {
    // 🔔 ALERTA al hacer clic en App Móvil
    const appMovil = document.querySelector('.app-m-vil');
    if (appMovil) {
      appMovil.addEventListener('click', () => {
        alert('¡Gracias por tu interés en nuestra App Móvil! Pronto estará disponible.');
        // window.location.href = 'https://tudireccion.com'; // ← Descomenta para redirigir más adelante
      });
    }
  
    // 📨 Copiar correo al portapapeles
    const correo = document.querySelector('.ejemplo-gmail-com');
    if (correo) {
      correo.style.cursor = 'pointer';
      correo.title = 'Haz clic para copiar el correo';
  
      correo.addEventListener('click', () => {
        navigator.clipboard.writeText('ejemplo@gmail.com')
          .then(() => {
            alert('Correo copiado al portapapeles: ejemplo@gmail.com');
          })
          .catch(() => {
            alert('No se pudo copiar el correo. Intenta manualmente.');
          });
      });
    }
  
    // 🎯 Hover en enlaces de navegación
    const navItems = document.querySelectorAll('.inicio, .servicios3, .nosotros, .testimonios3, .contacto');
  
    navItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.color = '#FFB84D';
      });
  
      item.addEventListener('mouseout', () => {
        item.style.color = '#133e87';
      });
    });
  });
  