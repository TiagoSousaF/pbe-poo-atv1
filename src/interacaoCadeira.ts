import { Cadeira } from './Cadeira';

const cadeira1: Cadeira = new Cadeira(`Médio`,`Bar`,`Amarelo`);

console.log(cadeira1.sentar());
console.log(cadeira1.puxar());