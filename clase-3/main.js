let number = parseInt(prompt('¿Cuántas veces quieres correr el script?'));

if (/^[0-9]+$/.test(number)) {
  for (let i = 0; i <= number; i++) {
  console.log('Esta es la iteración número: ' + i);
    if (i >= 1000) {
      console.log('Llegaste al número máximo permitido');
      break;
    }
  };
} else {
  console.log('Debes ingresar un número :)');
  number;
};
