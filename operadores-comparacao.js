const estaAprovado = true;

if (estaAprovado === true) { // sempre usar o "===" e não o "=="
  console.log('aprovado');
}

if ('0' === 0) {
  console.log('passou na comparação');
} else {
  console.log('não passou na comparação');
}

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
  console.log('não precisa de autorização');
} else {
  console.log('precisa de autorização');
}

