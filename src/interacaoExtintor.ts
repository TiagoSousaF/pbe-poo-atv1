import { Extintor } from './Extintor';

const extintor1: Extintor = new Extintor(`Médio`,`Base D'água`,`Vermelho`);

console.log(extintor1.apagarFogo());
console.log(extintor1.recarregar());