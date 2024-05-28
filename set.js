const nomes = ['Ana', 'Clara', 'João', 'Ana', 'Maria', 'Maria'];

// const meuSet = new Set(nomes);
// const nomesAtualizados = [...meuSet];
const nomesAtualizados = [...new Set(nomes)];
console.log(nomes);
console.log(nomesAtualizados);
