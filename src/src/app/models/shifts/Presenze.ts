export class Presenze {
    constructor(
        public readonly data: Date,
        // tslint:disable-next-line: variable-name
        public readonly turno_abbr: string,
        public readonly turno: string,
        public readonly offsite: number,
        public readonly url: string) { }
}