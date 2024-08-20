export class Flor {

    private flor: string;
    private cor: string;
    private tamanho: string;

    public constructor(_flor: string, _cor: string, _tamanho: string) {
        this.flor = _flor;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    public getFlor(): string {
        return this.flor;
    }

    public setFlor(_flor: string): void {
        this.flor = _flor;
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

    public desabrochar(): void  {
        console.log(`A flor está se abrindo para você!`);
    }

    public cheirar(): void {
        console.log(`O cheiro da flor está ótimo!`);
    }

}
