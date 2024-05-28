const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9] ;

const listaDeAlunosMedia = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosMedia[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosMedia;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        
        console.log(`O ${aluno} tem média ${mediaDoAluno}`)
    } else {
        console.log('Aluno não cadastrado');
    }
}

exibeNomeENota('João');