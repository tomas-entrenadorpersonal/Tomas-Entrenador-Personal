
// Función para guardar en localStorage
function guardarDiario(diario) {
    const diarioActual = JSON.parse(localStorage.getItem('diario')) || [];
    diarioActual.push(diario);
    localStorage.setItem('diario', JSON.stringify(diarioActual));
}

function borrarDiario() {
    localStorage.removeItem('diario');
    console.log('El diario ha sido borrado.');
  }