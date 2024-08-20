export class Notebook {

    private marca: string;
    private tamanho: string;
    private cor: string;

    public constructor(_marca: string, _tamanho: string, _cor: string) {
        this.marca = _marca;
        this.tamanho = _tamanho;
        this.cor = _cor;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public estudar(disciplina: string): void  {
        console.log(`Estudando sobre ${disciplina} para a prova`);
    }

    public pesquisar(disciplina: string): void {
        console.log(`Pesquisando sobre ${disciplina} para o trabalho`);
    }

}
