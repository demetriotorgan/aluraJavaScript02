const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9] ;

const listaDeAlunosMedia = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosMedia[0].includes(aluno)){
        console.log(`${aluno} está cadastado`);
        const indice = listaDeAlunosMedia[0].indexOf(aluno);
        console.log(indice);
        const media = listaDeAlunosMedia[1][indice];
        console.log(media);
    } else {
        console.log('Aluno não cadastrado');
    }
}

exibeNomeENota('João');