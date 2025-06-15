// Mostrar mensaje de bienvenida solo una vez
if (!localStorage.getItem("bienvenidaMostrada")) {
  alert("¡Bienvenido a tu Guía ECOEMS 2025! 💪");
  localStorage.setItem("bienvenidaMostrada", "true");
}

// Alternar modo oscuro
function toggleModoOscuro() {
  document.body.classList.toggle("modo-oscuro");
  const activado = document.body.classList.contains("modo-oscuro");
  localStorage.setItem("modoOscuro", activado);
}

// Aplicar modo oscuro guardado
if (localStorage.getItem("modoOscuro") === "true") {
  document.body.classList.add("modo-oscuro");
}

// Marcar tema como completado
function marcarCompletado(idTema) {
  localStorage.setItem("tema_" + idTema, "completado");
  const el = document.getElementById(idTema);
  if (el) el.classList.add("completado");
}

// Verificar al cargar qué temas ya están completados
function verificarCompletados() {
  const elementos = document.querySelectorAll("[data-tema-id]");
  elementos.forEach((el) => {
    const id = el.getAttribute("data-tema-id");
    if (localStorage.getItem("tema_" + id) === "completado") {
      el.classList.add("completado");
    }
  });
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", verificarCompletados);
