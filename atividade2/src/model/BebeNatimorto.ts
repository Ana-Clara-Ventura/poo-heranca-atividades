import { Bebe } from "./Bebe";

export class BebeNatimorto extends Bebe {
    private causa: string;

    public constructor(_id: string, _nome: string, _peso: number, _altura: number, _causa: string) {
        super(_id, _nome, _peso, _altura);
        this.causa = _causa;
    }

    public setCausa(_causa: string): void {
        this.causa = _causa;
    }
    public getCausa(): string {
        return this.causa;
    }
}