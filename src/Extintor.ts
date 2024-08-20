export class Extintor {

    private tamanho: string;
    private modelo: string;
    private cor: string;

    public constructor(_tamanho: string, _modelo: string, _cor: string) {
        this.tamanho = _tamanho;
        this.modelo = _modelo;
        this.cor = _cor;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public apagarFogo(): void  {
        console.log(`O extintor está apagando o fogo!`);
    }

    public recarregar(): void {
        console.log(`Extintor vazio, recarregar!`);
    }

}
