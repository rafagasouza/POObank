
import Corrente from "./Corrente.js";
import Poupanca from "./Poupanca.js";


const maria = new Poupanca('Maria Emilia Matos')

const Ráfaga = new Corrente('Ráfaga Matos')
Ráfaga.deposito(Ráfaga, 100)
Ráfaga.saque(50)
console.log(maria.dados()) 
console.log(Ráfaga.dados()) 