class Conta{
    #saldo
    #numero
    constructor(titular){
        this.#saldo = 0
        this.titular = titular
        this.#numero = Math.random()*2
        this.depositosRealizados = []
        this.transferenciasRealizadas = []
        this.emprestimosRealizados = []
    }

    set Saldo(valor){
        this.#saldo += valor
    }
    get Saldo(){
        return this.#saldo
    }

    transferir(transfer){
      if(transfer.remetente.email === transfer.destinatario.email){
        this.setSaldo(valor)
         this.transferenciasRealizadas.push(transfer)
      }else{
        this.setSaldo(-valor)
         this.transferenciasRealizadas.push(transfer)
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
   
    deposito(deposito){
        this.Saldo(deposito.valor)
        this.depositosRealizados.push(deposito)
    }

    emprestimo(emprestimo){
        this.Saldo(emprestimo.valor)
        this.emprestimosRealizados.push(emprestimo)
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

