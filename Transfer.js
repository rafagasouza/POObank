class Transfer extends Actions{
    constructor(remetente, destinatario, valor){
        this.remetente = remetente
        this.destinatario = destinatario
        super(valor)
    }
}

export default Transfer