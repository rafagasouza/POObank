import Conta from "./Conta.js";

class Corrente extends Conta{
    constructor(titular, valor){
        super(titular, valor, 'corrente')
    }

    ganhoAoMes(){
        const valorGanho = super.dados().saldo + (super.dados().saldo * 0.05)
        super.setSaldo(valor)
    }

    descontoPorsaque(){
          const taxa = super.dados().saldo * (5/100)
          return taxa
    }

    saque(valor){
      super.saque(valor)
      super.setSaldo(-valor - this.descontoPorsaque())
    }

}

export default Corrente