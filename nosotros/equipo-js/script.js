

document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.nav div');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s';
        link.style.color = '#FFB84D';
      });
  
      link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
        link.style.color = '#133e87';
      });
  
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('activo'));
        link.classList.add('activo');
      });
    });
  
   
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
  
   
    const sections = document.querySelectorAll('section, div[id]');
  
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
  
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
  
        if (sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('activo');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('activo');
            }
          });
        }
      });
    });
  
  });
  