export class Passaro {

    private especie: string;
    private cor: string;
    private tamanho: string;

    public constructor(_especie: string, _cor: string, _tamanho: string) {
        this.especie = _especie;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(_especie: string): void {
        this.especie = _especie;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public voar(): void  {
        console.log(`O pássaro esta voando no horizonte!`);
    }

    public comer(): void {
        console.log(`O pássaro está se alimentando!`);
    }

}
