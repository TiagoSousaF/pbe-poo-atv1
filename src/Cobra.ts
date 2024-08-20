export class Cobra {

    private tamanho: string;
    private especie: string;
    private cor: string;

    public constructor(_tamanho: string, _especie: string, _cor: string) {
        this.tamanho = _tamanho;
        this.especie = _especie;
        this.cor = _cor;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
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

    public morder(algo: string): void  {
        console.log(`A cobra mordeu o ${algo}!`);
    }

    public comer(alimento: string): void {
        console.log(`A cobra comeu um ${alimento}`);
    }

}
