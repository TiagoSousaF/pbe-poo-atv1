export class Placa {

    private tamanho: string;
    private cor: string;
    private modelo: string;

    public constructor(_tamanho: string, _cor: string, _modelo: string) {
        this.tamanho = _tamanho;
        this.cor = _cor;
        this.modelo = _modelo;
    }

    public gettamanho(): string {
        return this.tamanho;
    }

    public settamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public getcor(): string {
        return this.cor;
    }

    public setcor(_cor: string): void {
        this.cor = _cor;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public sinalizar(): void  {
        console.log(`A placa está sinalizando algo!`);
    }

    public alertar(): void {
        console.log(`A placa está emitindo um sinal de alerta!`);
    }

}
