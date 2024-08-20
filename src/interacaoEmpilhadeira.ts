import { Empilhadeira } from './Empilhadeira';

const empilhadeira1: Empilhadeira = new Empilhadeira(`Dewalt`,`X3`,`500 Quilos`);

console.log(empilhadeira1.carregar());
console.log(empilhadeira1.andar());