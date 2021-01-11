export class Day {
    constructor(
        public readonly date: Date,
        public readonly weekDayName: string,
        public readonly workingDay: boolean,
        public readonly holydayName: string,
        public readonly weekNumber: number,
        public readonly itIsToday: boolean
    ) {}
}
