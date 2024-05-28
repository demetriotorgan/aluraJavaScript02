const nomes = ["Evandro", "Laura", "Mari", "Camila"];

nomes.forEach(function(nome){
    console.log(nome);
});

//usando arrow function
nomes.forEach((nome)=>{
    console.log(nome);
});

//declarando uma callBack externa
function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome)