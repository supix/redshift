import { Day } from './day';

describe('Day', () => {
  it('should create an instance', () => {
    expect(new Day(new Date(), 'lun', false, 1, false)).toBeTruthy();
  });
});
