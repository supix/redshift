import { Presenze } from "./Presenze";

export class ManShift {
    constructor(
        public readonly turnista: string,
        // tslint:disable-next-line: variable-name
        public readonly tipo_turnista: string,
        public readonly presenze: Presenze[]) { }
}
