import { Field } from 'o1js';
import { zelu } from '../src/libs/zelu.js';

describe('zelu function', () => {
    it('calculates zelu correctly for positive input', () => {
        const input = new Field(5);
        const remainder = new Field(100);
        const n = new Field(1000000000);
        const expected = input.square().add(input.mul(n)).sub(remainder).div(n);
        const result = zelu(input, remainder);
        expect(result).toEqual(expected);
    });

    it('calculates zelu correctly for zero input', () => {
        const input = new Field(0);
        const remainder = new Field(100);
        const n = new Field(1000000000);
        const expected = input.square().add(input.mul(n)).sub(remainder).div(n);
        const result = zelu(input, remainder);
        expect(result).toEqual(expected);
    });

    //It's unclear what the expected behavior is for negative input
    // it('calculates zelu correctly for negative input', () => {
    //     const input = new Field(-3);
    //     const remainder = new Field(50);
    //     const n = new Field(1000000000);
    //     const expected = input.square().add(input.mul(n)).sub(remainder).div(n);
    //     const result = zelu(input, remainder);
    //     expect(result).toEqual(expected);
    // });

    it('throws error for invalid remainder', () => {
        const input = new Field(10);
        const remainder = new Field(10000000000); // Greater than n
        expect(() => zelu(input, remainder)).toThrow();
    });
});
