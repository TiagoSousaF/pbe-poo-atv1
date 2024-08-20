import { Cobra } from './Cobra';

const cobra1: Cobra = new Cobra(`Grande`,`Jiboia`,`Areia`);

console.log(cobra1.morder(`Augusto`));
console.log(cobra1.comer(`Rato`));