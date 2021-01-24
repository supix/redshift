import { Day } from './day';

describe('Day', () => {
  it('should create an instance', () => {
    expect(new Day(new Date(), 'lun', false, 'festa', 1, false)).toBeTruthy();
  });
});
