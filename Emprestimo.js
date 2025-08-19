import Parcela from "./Parcela.js"
import Actions from "./Actions.js"

class Emprestimo extends Actions{
    #taxa
    constructor(valor, data, numParcelas){
        super(valor, data)
        this.parcelas = []

        for(let i = 0; i < numParcelas; i++){
            this.parcelas.push(new Parcela(i + 1, valor/numParcelas, false))
        }
    }
}

export default Emprestimo

const novo = new Emprestimo(1000, '10/10/2025', 10)

console.log(novo)