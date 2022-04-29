import { sum } from '../src';

describe('sum', () => {
    it('can add two positive integers', () => {
        expect(sum(2, 8)).toEqual(10);
    });

    it('and also add negative integers', () => {
        expect(sum(-6, -3)).toEqual(-9);
    });
});