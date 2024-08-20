export class Bicicleta {

    private marca: string;
    private aro: number;
    private cor: string;

    public constructor(_marca: string, _aro: number, _cor: string) {
        this.marca = _marca;
        this.aro = _aro;
        this.cor = _cor;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getAro(): number {
        return this.aro;
    }

    public setAro(_aro: number): void {
        this.aro = _aro;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public pedalar(): void  {
        console.log(`Pedalando a bicicleta`);
    }

    public frear(): void {
        console.log(`Freando a Bicicleta`);
    }

}
