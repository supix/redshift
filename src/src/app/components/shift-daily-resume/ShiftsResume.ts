export class ShiftsResume {
    private map: Map<string, number> = new Map<string, number>();

    private getKey(date: Date, shiftCode: string) {
        const pippo = date.valueOf().toString()
            .concat('|')
            .concat(shiftCode);
        return pippo;
    }

    public incShiftCount(date: Date, shiftCode: string, count: number = 1): void {
        const key = this.getKey(date, shiftCode);
        if (this.map.has(key)) {
            this.map.set(key, this.map.get(key) + count);
        } else {
            this.map.set(key, count);
            console.log('hhh', key, this.map.get(key), this.map.has(key));
        }
    }

    public getShiftCount(date: Date, shiftCode: string): number {
        const key = this.getKey(date, shiftCode);
        if (this.map.has(key)) {
            return this.map.get(key);
        }
        else {
            return 0;
        }
    }

    public getAllShiftCodes(): string[] {
        return [...this.map.keys()].map(k => k.split('|')[1]);
    }
}