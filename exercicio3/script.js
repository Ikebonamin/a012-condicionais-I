'strict';

let nacionalidade = prompt('Escreva aqui sua nacionalidade');
console.log(nacionalidade);
nacionalidade = nacionalidade.toLowerCase();
console.log(nacionalidade);

if (nacionalidade == 'brasileira') {
  console.log(`sua nacionalidade é ${nacionalidade}`);
} else if (nacionalidade == 'argentina') {
  console.log(`sua nacionalidade é ${nacionalidade}`);
} else if (nacionalidade == 'uruguaia') {
  console.log(`sua nacionalidade é ${nacionalidade}`);
} else if (nacionalidade == 'chilena') {
  console.log(`sua nacionalidade é ${nacionalidade}`);
} else if (nacionalidade == 'colombiana') {
  console.log(`sua nacionalidade é ${nacionalidade}`);
} else {
  console.log(`sua nacionalidade não é válida`);
}

// // usando  array //

// let nacionalidade = prompt('Escreva aqui sua nacionalidade');
// nacionalidade = nacionalidade.toLowerCase();

// let nacionalidades = [
//   'argentina',
//   'colombiana',
//   'uruguaia',
//   'brasileira',
//   'chilena',
// ];
// let resultado = nacionalidades.includes(nacionalidade)
//   ? console.log('sim')
//   : console.log('nao');
// console.log(resultado);
