import Parcela from "./Parcela.js"
import Actions from "./Actions.js"

class Emprestimo extends Actions{
   static #taxa = 1.05

   constructor(valor,numParcelas){
        
        super(valor)
        this.parcelas = []

        for(let i = 0; i < numParcelas; i++){
            this.parcelas.push(new Parcela(i + 1, (valor * Emprestimo.#taxa)/numParcelas, false))
        }
    }

   static get taxa(){
    return Emprestimo.#taxa
   }
   
   static set novaTaxa(taxa){
    Emprestimo.#taxa = 1 + (taxa/100)
   }
    
}
