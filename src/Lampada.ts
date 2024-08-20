export class Lampada {

    private tamanho: string;
    private potencia: string;
    private modelo: string;

    public constructor(_tamanho: string, _potencia: string, _modelo: string) {
        this.tamanho = _tamanho;
        this.potencia = _potencia;
        this.modelo = _modelo;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public getPotencia(): string {
        return this.potencia;
    }

    public setPotencia(_potencia: string): void {
        this.potencia = _potencia;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public acender(): void  {
        console.log(`A lâmpada acendeu!`);
    }

    public apagar(): void {
        console.log(`A lâmpada apagou!`);
    }

}
