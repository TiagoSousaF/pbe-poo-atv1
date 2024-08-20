import { Computador } from './Computador';

const Computador1: Computador = new Computador(`Windows`,`Intel I5 12600K`,`1 Terabyte`);

console.log(Computador1.trabalhar());
console.log(Computador1.jogar(`Shadow of the Colossus`));