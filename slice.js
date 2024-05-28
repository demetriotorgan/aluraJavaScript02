const alunos = [
    "Aluno1",
    "Aluno2",
    "Aluno3",
    "Aluno4",
    "Aluno5",
    "Aluno6",
    "Aluno7",
    "Aluno8"
];

const sala1 = alunos.slice(0,5);
console.log(alunos);
console.log(sala1);

const sala2 = alunos.slice(5);
console.log(sala2);

//usando length
const sala3 = alunos.slice(0,alunos.length / 2);
console.log(sala3);