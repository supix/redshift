import { Presenze } from "./Presenze";

export class ManShift {
    constructor(
        public readonly codice: string,
        public readonly nome: string,
        public readonly cognome: string,
        public readonly gruppi: string[],
        public readonly presenze: Presenze[]) { }

    public get nominativo() {
        return this.nome + ' ' + this.cognome;
    }
}
