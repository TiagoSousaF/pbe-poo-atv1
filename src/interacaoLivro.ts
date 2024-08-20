import { Livro } from './Livro';

const livro1: Livro = new Livro(`J.R.R. Tolkien`,`Fantasia`,`Carmesim`);

console.log(livro1.ler());
console.log(livro1.escrever());