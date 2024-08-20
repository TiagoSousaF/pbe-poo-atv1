export class Empilhadeira {

    private marca: string;
    private modelo: string;
    private capacidade: string;

    public constructor(_marca: string, _modelo: string, _capacidade: string) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.capacidade = _capacidade;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getCapacidade(): string {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: string): void {
        this.capacidade = _capacidade;
    }

    public carregar(): void  {
        console.log(`A empilhadeira está carregando madeira!`);
    }

    public andar(): void {
        console.log(`A empilhadeira está se encaminhado para o destino!`);
    }

}
