export class DayInfo {
  constructor(
    public readonly day: Date,
    public readonly holyday: boolean,
    public readonly today: boolean,
    public readonly curMonth: boolean) { }
}
