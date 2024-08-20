import { Lampada } from './Lampada';

const lampada1: Lampada = new Lampada(`Pequena`,`500 Watts`,`Bulbo`);

console.log(lampada1.acender());
console.log(lampada1.apagar());