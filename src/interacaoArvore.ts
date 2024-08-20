import { Arvore } from './Arvore';

const arvore1: Arvore = new Arvore(`Grande`,`Densa`,`Verde-Escuro`);

console.log(arvore1.liberarO2(`CO2`));
console.log(arvore1.fazerSombra(`Folhas`));