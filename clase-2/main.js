let color = prompt('¿De qué color es la pantera?');

let colorMinus = color.toLowerCase();

if (colorMinus == 'rosa') {
  alert('Muy bien!!')
  document.getElementById('imagen').style.display = "inline";
} else {
  alert('Recarga la página e intenta de nuevo');
}
