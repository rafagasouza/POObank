import Conta from "./Conta.js";

class Poupanca extends Conta{
    constructor(titular, valor){
        super(titular, valor, 'poupanca')
    }

    ganhoAoMes(){
        const valorGanho = super.dados().saldo * (5/100)
        super.setSaldo(valorGanho)
    }

}

export default Poupanca