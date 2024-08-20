export class Bola {

    private tipo: string;
    private marca: string;
    private cor: string;

    public constructor(_tipo: string, _marca: string, _cor: string) {
        this.tipo = _tipo;
        this.marca = _marca;
        this.cor = _cor;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public chutar(pessoa: string): void  {
        console.log(`O ${pessoa} chutou a bola!`);
    }

    public rolar(): void {
        console.log(`A bola está rolando!`);
    }

}
