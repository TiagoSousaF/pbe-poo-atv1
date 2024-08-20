export class Livro {

    private autor: string;
    private genero: string;
    private cor: string;

    public constructor(_autor: string, _genero: string, _cor: string) {
        this.autor = _autor;
        this.genero = _genero;
        this.cor = _cor;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(_autor: string): void {
        this.autor = _autor;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(_genero: string): void {
        this.genero = _genero;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public ler(): void  {
        console.log(`Lendo o livro`);
    }

    public escrever(): void {
        console.log(`Escrevendo o livro`);
    }

}
