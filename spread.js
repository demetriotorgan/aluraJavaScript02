// const notas = [7,7,8,9];
// console.log(notas);
// const novasNotas = notas;
// novasNotas.push(10);

// //note que o array original foi alterado tb com o valor 10
// console.log(novasNotas);
// console.log(notas);

const notas = [7,7,8,9];
const novasNotas = [...notas, 10];

//agora com o spread operator o array notas original se mantem
console.log(novasNotas);
console.log(notas);

