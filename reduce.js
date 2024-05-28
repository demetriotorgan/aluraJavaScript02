const sala1 = [7,8,8,7,10,6.5,4,10,7];
const sala2 = [6,5,8,9,5,6];
const sala3 = [7,3.5, 8, 9.5];

// function calculaMedia(notasSala){
//   const somaDasNotas = notasSala.reduce((acumulador, nota)=>{
//         return acumulador + nota;
//     }, 0);
//     const media = somaDasNotas / notasSala.length;
//     return media;
// }

function calculaMedia(notasSala){
  const somaDasNotas = notasSala.reduce((acumulador, nota)=> acumulador + nota, 0);
    const media = somaDasNotas / notasSala.length;
    return media;
}


console.log(`A média da sala é de: ${calculaMedia(sala1)}`);
console.log(`A média da sala é de: ${calculaMedia(sala2)}`);
console.log(`A média da sala é de: ${calculaMedia(sala3)}`);

