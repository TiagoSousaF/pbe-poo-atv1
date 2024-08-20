export class Vaso {

    private tamanho: string;
    private formato: string;
    private cor: string;

    public constructor(_tamanho: string, _formato: string, _cor: string) {
        this.tamanho = _tamanho;
        this.formato = _formato;
        this.cor = _cor;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public plantar(): void  {
        console.log(`A batata está plantada no vaso`);
    }

    public colher(): void {
        console.log(`Colhendo as rosas do vaso`);
    }

}
