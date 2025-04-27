const topBtn = document.getElementById("topBtn");
const imagenes = document.querySelectorAll(".mask-group,.mask-group2");

imagenes.forEach((imagen) => {
  imagen.addEventListener("mouseover", () => {
    Swal.fire({
      title: "¡Hola!",
      text: "“Estas personas son el equipo de veterinarios amantes de los animales más increíble con el que mi esposa y yo hemos tenido el placer de trabajar. Se especializan en medicina felina y hacen todo lo posible para asegurarse de que los miembros peludos de su familia reciban el mejor cuidado posible. Los hemos utilizado durante años. ¡Reciben mi más alta recomendación!” 😺",
      icon: "success",
      confirmButtonText: "Continuar",
    });
    imagen.style.transform = "scale(1.1)";
    imagen.style.transition = "transform 0.3s";
  });
});
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
