import { TestBed } from '@angular/core/testing';
import { ShiftsResume } from './ShiftsResume';

describe('ShiftsResume', () => {
  it('should be created', () => {
    expect(new ShiftsResume()).toBeTruthy();
  });

  it('returns zero with unexisting key', () => {
    const count = (new ShiftsResume()).getShiftCount(new Date(12345), 'X');
    expect(count).toBe(0);
  });

  it('saves the implicitly incremented value', () => {
    const date = new Date(11111);
    const sr = new ShiftsResume();
    sr.incShiftCount(date, 'X');
    const count = sr.getShiftCount(date, 'X');
    expect(count).toBe(1);
  });

  it('saves implicit multiple increments', () => {
    const date = new Date(11111);
    const sr = new ShiftsResume();
    sr.incShiftCount(date, 'X');
    sr.incShiftCount(date, 'X');
    const count = sr.getShiftCount(date, 'X');
    expect(count).toBe(2);
  });

  it('saves the explicitly incremented value', () => {
    const date = new Date(22222);
    const sr = new ShiftsResume();
    sr.incShiftCount(date, 'X', 99);
    const count = sr.getShiftCount(date, 'X');
    expect(count).toBe(99);
  });

  it('saves explicit multiple increments', () => {
    const date = new Date(11111);
    const sr = new ShiftsResume();
    sr.incShiftCount(date, 'X', 33);
    sr.incShiftCount(date, 'X', 44);
    const count = sr.getShiftCount(date, 'X');
    expect(count).toBe(77);
  });
});
