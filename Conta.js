class Conta{
    #saldo
    #numero
    constructor(titular, saldo = 0, type = null){
        this.#saldo = saldo
        this.titular = titular
        this.#numero = Math.random()*2
        this.type = type
        this.depositosRealizados = []
        this.transferenciasRealizadas = []
        this.emprestimosRealizados = []
    }

    setSaldo(valor){
        this.#saldo += valor
    }

    transferir(rementente, valor){
      if(rementente.numero === this.#numero){
        this.setSaldo(valor)
      }else{
        this.setSaldo(-valor)
      }
    }

    saque(valor){
      if(this.#saldo < valor) {
        console.log('Saldo insuficiente!')
        return false
      }
      else{
          this.#saldo -= valor
          return true
      }
    }
   
    deposito(rementente, valor){
        rementente.setSaldo(valor)
    }

    dados(){
        return {
            saldo: this.#saldo,
            titular: this.titular,
            numero: this.#numero,
            type: this.type
        }
    }


}

export default Conta

