class Transfer extends Actions{
    constructor(remetente, destinatario, valor, data){
        this.remetente = remetente
        this.destinatario = destinatario
        super(valor, data)
    }
}

export default Transfer