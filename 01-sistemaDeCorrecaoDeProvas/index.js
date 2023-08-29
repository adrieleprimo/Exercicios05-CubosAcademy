const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let acertos = 0;

function corrigirProva (resposta, correta){       
    for(let i= 0; i<prova.questoes.length; i++){
        if (prova.questoes[i].resposta === prova.questoes[i].correta){
          acertos++;  
        }
    }   
   return `O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${acertos*2} `
}
const resultado = corrigirProva(prova);
console.log(resultado)
