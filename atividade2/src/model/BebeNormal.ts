import { Bebe } from "./Bebe";

export class BebeNormal extends Bebe {
    private vacinado: string;

    public constructor(_id: string, _nome: string, _peso: number, _altura: number, _vacinado: string) {
        super(_id, _nome, _peso, _altura);
        this.vacinado = _vacinado;
    }

    public setVacinado(_vacinado: string): void {
        this.vacinado = _vacinado;
    }
    public getVacinado(): string {
        return this.vacinado;
    }
}