document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = this.dataset.section;
    
    // Oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));

    // Muestra solo la seleccionada
    document.getElementById(target).classList.add('activa');
  });
});
