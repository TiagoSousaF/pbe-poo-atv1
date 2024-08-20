export class Arvore {

    private tamanho: string;
    private folhagem: string;
    private cor: string;

    public constructor(_tamanho: string, _folhagem: string, _cor: string) {
        this.tamanho = _tamanho;
        this.folhagem = _folhagem;
        this.cor = _cor;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public getFolhagem(): string {
        return this.folhagem;
    }

    public setFolhagem(_folhagem: string): void {
        this.folhagem = _folhagem;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public liberarO2(gasCarbonico: string): void  {
        console.log(`A árvore está retendo ${gasCarbonico} e liberando O2!`);
    }

    public fazerSombra(folhas: string): void {
        console.log(`As ${folhas} estão produzindo uma ótima sombra!`);
    }

}
