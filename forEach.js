const notas = [10, 6.5, 8, 7.5];

//passando uma função anonima para o método forEach para cada elemento do array
// notas.forEach(function (){
//     console.log("Oi")
// });

let somaDasNotas = 0;
notas.forEach(function (nota, indice){
    somaDasNotas += nota;
    console.log(indice);
});

const media = somaDasNotas / notas.length
console.log(media);

