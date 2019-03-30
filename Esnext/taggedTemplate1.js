// tagged templates - processa o template string dentro de uma função

function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.table(tag `${aluno} está ${situacao}.`);


