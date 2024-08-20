export class Computador {

    private sistema: string;
    private processador: string;
    private armazenamento: string;

    public constructor(_sistema: string, _processador: string, _armazenamento: string) {
        this.sistema = _sistema;
        this.processador = _processador;
        this.armazenamento = _armazenamento;
    }

    public getSistema(): string {
        return this.sistema;
    }

    public setSistema(_sistema: string): void {
        this.sistema = _sistema;
    }

    public getProcessador(): string {
        return this.processador;
    }

    public setProcessador(_processador: string): void {
        this.processador = _processador;
    }

    public getArmazenamento(): string {
        return this.armazenamento;
    }

    public setArmazenamento(_armazenamento: string): void {
        this.armazenamento = _armazenamento;
    }

    public trabalhar(): void  {
        console.log(`Trabalhando para ganhar dinheiro!`);
    }

    public jogar(jogo: string): void {
        console.log(`Estou jogando ${jogo}! O melhor de todos!`);
    }

}
